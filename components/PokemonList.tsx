import Link from "next/link";
import type { Pokemon } from "../types";

export const PokemonList = ({ list }: { list: Pokemon[] }) => {
  return (
    <div className="bg-white shadow rounded">
      <ul className="divide-y divide-gray-200">
        {list.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${pokemon.name}`}>
              <a href="" className="block hover:bg-gray-100">
                <div className="p-4 capitalize">{pokemon.name}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
