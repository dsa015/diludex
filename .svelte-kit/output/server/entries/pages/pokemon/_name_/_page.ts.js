import { e as error } from "../../../../chunks/index.js";
const engDescription = (species) => {
  const englishDescription = species.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );
  return englishDescription;
};
const load = async ({ fetch, params, data }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.name}`);
  if (!res.ok) {
    throw error(res.status, "Failed to fetch");
  }
  const species = await res.json();
  return {
    pokemon: data.data,
    description: engDescription(species)?.flavor_text
  };
};
export {
  load
};
