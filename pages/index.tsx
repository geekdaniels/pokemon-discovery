import React from "react";
import type { GetStaticProps } from "next";
import type { PokemonsShape } from "../types";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { PokemonList } from "../components/PokemonList";
import { Pagination } from "../components/Pagination";

const fetchPokemonList = async (offset: number, limit: number) =>
  await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  ).then((res) => res.json());

function HomePage() {
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(16);

  const {
    isLoading,
    isError,
    data: pokemons,
    isFetching
  } = useQuery<PokemonsShape>(["pokemons", offset], () =>
    fetchPokemonList(offset, limit)
  );

  if (isLoading) return "Loading...";

  const nextPage = () => {
    setOffset((offset) => offset + limit);
  };

  const prevPage = () => {
    setOffset((offset) => offset - limit);
  };

  if (isLoading) return "Loading...";
  if (isError) return "An error occured";

  return (
    <>
      <div className="max-w-3xl mx-auto my-4">
        <PokemonList list={pokemons?.results} />
      </div>

      <Pagination
        goNext={nextPage}
        goBack={prevPage}
        next={pokemons.next}
        prev={pokemons.previous}
        count={pokemons.count}
        limit={limit}
      />
    </>
  );
}

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<PokemonsShape>("pokemons", () =>
    fetchPokemonList(0, 16)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
