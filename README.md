### Project Title

Pokemon Explorer

### Description / Thought process

The first step in talkling the problem statement for me was to break down the problem into bits. I started by breaking it down into two major block:

- The root which displays a list of pokemons.
- The details page which displays the details of each pokemon.
- After breaking it down, I studied the api(s) provided.
- I opted to integrate react-query to tap into the benefits of caching, and various performance optimizations since i'm dealing with a large data set.
- I also used tailwind for styling. 
- I created the PaginationList component, which consumed the data passed down from the parent.
- The next step was to create the template for the details page (PokemonDetails.tsx) and style appropraitely.
After which i created a client side pagination which I later refactored to route pased  pagination to preserve browser history and provide a better navigation experience for visitors.

### 🚀 Get Up and Running in 5 Minutes
1. **Install the Dependencies.**
```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Improvements

- Search capability
- Unit Tests
- Separate api calls from presentational layer.
