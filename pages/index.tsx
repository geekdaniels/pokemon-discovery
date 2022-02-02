import React from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import type { PokemonsShape } from "../TYPES";
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
      <PokemonList list={pokemons?.results} />
    </>
  );
}

export default HomePage;


