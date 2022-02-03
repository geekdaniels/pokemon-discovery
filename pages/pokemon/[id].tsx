import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { PokemonDetail } from "../../components/PokemonDetails";
import { Pokedex } from "../../types";

const fetchPokemonDetail = async (id: string) =>
  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
    res.json()
  );

export default function Pokemon() {
  const router = useRouter();

  const id = typeof router.query?.id === "string" ? router.query.id : "";

  const {
    data: pokemon,
    isLoading,
    isError
  } = useQuery<Pokedex>(["getPokemonData", id], () => fetchPokemonDetail(id), {
    enabled: id.length > 0
  });

  // return a loading component when awaiting data
  // Create a loader component
  if (isLoading) return "Loading...";

  // return a error message component when awaiting data
  // Create an error component
  if (isError) return "An error occured";

  return <PokemonDetail pokemon={pokemon} />;
}
