import React from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import type { PokemonsShape } from "../types";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { PokemonList } from "../components/PokemonList";

const fetchPokemonList = async (offset: number, limit: number) =>
  await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  ).then((res) => res.json());

function HomePage() {
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(16);

  const {
    isLoading,
    error,
    data: pokemons,
    isFetching
  } = useQuery<PokemonsShape>("pokemons", () =>
    fetchPokemonList(offset, limit)
  );

  if (isLoading) return "Loading...";

  return (
    <>
      <div className="max-w-3xl mx-auto my-4">
        <PokemonList list={pokemons?.results} />
      </div>


    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<PokemonsShape>("pokemons", () =>
    fetchPokemonList(0, 16)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
