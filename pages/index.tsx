import React from "react";
import type { GetStaticProps } from "next";
import type { PokemonsShape } from "../types";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { useRouter } from "next/router";

import { PokemonList } from "../components/PokemonList";
import { Pagination } from "../components/Pagination";

const fetchPokemonList = async (page: number = 0, limit: number) => {
  const offset = +page === 0 ? 0 : +page * limit;

  return await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  ).then((res) => res.json());
};

function HomePage({ page }) {
  const router = useRouter();
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(16);

  const {
    isLoading,
    isError,
    data: pokemons,
    isFetching
  } = useQuery<PokemonsShape>(["pokemons", page], () =>
    fetchPokemonList(page, limit)
  );

  if (isLoading) return "Loading...";

  const nextPage = () => {
    setOffset((offset) => offset + limit);
  };

  const prevPage = () => {
    setOffset((offset) => offset - limit);
  };

  // return a loading component when awaiting data
  // Create a loader component
  if (isLoading) return "Loading...";

  // return a error message component when awaiting data
  // Create an error component
  if (isError) return "An error occured";

  return (
    <>
      <div className="max-w-3xl mx-auto my-4">
        {/* PokemonList component takes in a list of pokemon */}
        <PokemonList list={pokemons?.results} />
      </div>
      {/* Pagination component */}
      <Pagination
        next={pokemons.next}
        prev={pokemons.previous}
        count={pokemons.count}
        page={page}
      />
    </>
  );
}

export default HomePage;

export const getServerSideProps = async ({ query: { page = 0 } }) => {
  let limit = 16;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<PokemonsShape>(["pokemons", page], () =>
    fetchPokemonList(page, limit)
  );

  return {
    props: {
      page: +page,
      dehydratedState: dehydrate(queryClient)
    }
  };
};
