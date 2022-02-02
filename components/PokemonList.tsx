import type { Pokemon } from "../TYPES";

export const PokemonList = ({ list }: { list: Pokemon[] }) => {
  return (
    <ul>
      {list.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
