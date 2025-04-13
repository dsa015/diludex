const load = async ({ fetch, params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const data = await res.json();
  return { data };
};
export {
  load
};
