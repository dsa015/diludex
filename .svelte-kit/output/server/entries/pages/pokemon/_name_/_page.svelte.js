import { d as ensure_array_like, e as escape_html, i as attr_style, f as attr, c as pop, p as push } from "../../../../chunks/index.js";
import { t as toUpperCase } from "../../../../chunks/utils.js";
const pokemonTypeColor = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
  stellar: "#40B5A5",
  unknown: "#9DC1B7"
};
function MovePool($$payload, $$props) {
  let { moves } = $$props;
  const each_array = ensure_array_like(moves);
  $$payload.out += `<ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let move = each_array[$$index];
    $$payload.out += `<li>${escape_html(move.name)} <ul><li>Power: ${escape_html(move.power)}</li> <li>PP: ${escape_html(move.pp)}</li></ul></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const pokemonName = toUpperCase(data.data.name);
  const imgSrc = data.data.sprites.other.dream_world.front_default ?? data.data.sprites.front_default;
  const typeWithColor = (type) => {
    return pokemonTypeColor[type];
  };
  const each_array = ensure_array_like(data.data.types);
  const each_array_1 = ensure_array_like(data.data.abilities);
  $$payload.out += `<a href="/">Go back</a> <h1>${escape_html(pokemonName)}</h1> <ul class="svelte-7vuml2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let type = each_array[$$index];
    $$payload.out += `<li${attr_style(`background-color: ${typeWithColor(type.type.name)}`)} class="svelte-7vuml2">${escape_html(toUpperCase(type.type.name))}</li>`;
  }
  $$payload.out += `<!--]--></ul> <p>ID: ${escape_html(data.data.id)}</p> <p>Height: ${escape_html(data.data.height)}</p> <p>Weight: ${escape_html(data.data.weight)}</p> <h2>Abilities:</h2> <p>Abilities are special traits that give Pokémon unique powers.</p> <h3>All moves</h3> `;
  MovePool($$payload, { moves: data.moveDetails });
  $$payload.out += `<!----> <h3>Special moves</h3> <ul class="svelte-7vuml2"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let ability = each_array_1[$$index_1];
    $$payload.out += `<li class="svelte-7vuml2">${escape_html(ability.ability.name)}</li>`;
  }
  $$payload.out += `<!--]--></ul> <img${attr("src", imgSrc)}${attr("alt", data.data.name)}>`;
  pop();
}
export {
  _page as default
};
