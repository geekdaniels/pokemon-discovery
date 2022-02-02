import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { PokemonDetail } from "../../components/PokemonDetails";
import { Pokedex } from "../types";

const fetchPokemonDetail = async (id: string) =>
  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
    res.json()
  );

export default function Pokemon() {
  const router = useRouter();

  const id = typeof router.query?.id === "string" ? router.query.id : "";

  const {
    isSuccess,
    data: pokemon,
    isLoading,
    isError
  } = useQuery<Pokedex>(["getPokemonData", id], () => fetchPokemonDetail(id), {
    enabled: id.length > 0
  });

  if (isLoading) return "Loading...";

  return <PokemonDetail pokemon={pokemon} />;
}
