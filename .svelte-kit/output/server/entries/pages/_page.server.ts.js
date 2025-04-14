const load = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000");
  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  const data = await res.json();
  const pokemon = data.results.map((result, index) => {
    return {
      name: result.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      pokemonUrl: result.url
    };
  });
  return {
    pokemon
  };
};
export {
  load
};
