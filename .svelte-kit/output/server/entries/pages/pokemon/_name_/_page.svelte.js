import { e as ensure_array_like, c as pop, p as push } from "../../../../chunks/index2.js";
import { t as toUpperCase, a as attr } from "../../../../chunks/utils.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const imgSrc = data.pokemon.sprites.other["official-artwork"].front_default;
  const pokemonName = toUpperCase(data.pokemon.name);
  const each_array = ensure_array_like(data.pokemon.abilities);
  $$payload.out += `<a href="/">Go back</a> <h1>${escape_html(pokemonName)}</h1> <p>ID: ${escape_html(data.pokemon.id)}</p> <p>${escape_html(data.description)}</p> <p>Height: ${escape_html(data.pokemon.height)}</p> <p>Weight: ${escape_html(data.pokemon.weight)}</p> <h2>Abilities:</h2> <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let ability = each_array[$$index];
    $$payload.out += `<li>${escape_html(ability.ability.name)} (Slot: ${escape_html(ability.slot)})</li>`;
  }
  $$payload.out += `<!--]--></ul> <img${attr("src", imgSrc)}${attr("alt", data.pokemon.name)}>`;
  pop();
}
export {
  _page as default
};
