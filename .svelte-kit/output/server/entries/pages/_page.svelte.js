import { e as ensure_array_like, d as stringify, c as pop, p as push } from "../../chunks/index2.js";
import { a as attr, t as toUpperCase } from "../../chunks/utils.js";
import { fetchPokemon } from "./_page.ts.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let allPokemon = {};
  allPokemon.results.map((e) => fetchPokemon(e.name));
  const each_array = ensure_array_like(allPokemon.results);
  $$payload.out += `<h1>Welcome to SvelteKit</h1> <h2>All Pokemon:</h2> <ul class="ul"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let result = each_array[$$index];
    $$payload.out += `<li><a${attr("href", `/pokemon/${stringify(result.name)}`)}>${escape_html(toUpperCase(result.name))}</a></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
export {
  _page as default
};
