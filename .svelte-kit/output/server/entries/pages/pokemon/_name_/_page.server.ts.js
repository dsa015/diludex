const load = async ({ fetch, params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const data = await res.json();
  const moveDetails = await Promise.all(
    data.moves.map(async (move) => {
      const res2 = await fetch(move.move.url);
      const moveData = await res2.json();
      return moveData;
    })
  );
  return { data, moveDetails };
};
export {
  load
};
