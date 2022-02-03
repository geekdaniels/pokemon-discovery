import { Pokedex } from "../types";

export const PokemonDetail = ({ pokemon }: { pokemon: Pokedex }) => {
  return (
    <>
      <div className="my-8 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 px-6 pt-10 pb-8  shadow-xl ring-1 ring-gray-900/5 sm:px-10">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold capitalize">
              {pokemon?.name}
            </p>
            <p className="text-slate-500 font-medium">
              Weight:{pokemon?.weight}Kg
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white max-w-2xl mx-auto shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Pokemon Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">General Info</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Height</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                {pokemon?.height}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Stats</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                {pokemon?.stats.map((stat, index) => (
                  <span key={index} className="items-center">
                    {stat?.stat?.name} : {stat?.base_stat},{" "}
                  </span>
                ))}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Moves</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                {pokemon?.moves.map((move, index) => (
                  <span key={index} className="items-center">
                    {move?.move?.name},{" "}
                  </span>
                ))}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Types</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">
                  {pokemon?.types.map((type, index) => (
                    <span key={index} className="items-center">
                      {type?.type?.name},{" "}
                    </span>
                  ))}
                </dd>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};
