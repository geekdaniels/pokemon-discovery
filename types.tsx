export type PokemonsShape = {
  count: number;
  next: string;
  previous: null | string;
  results: Pokemon[];
};

export type Pokemon = {
  name: string;
  url: string;
};
