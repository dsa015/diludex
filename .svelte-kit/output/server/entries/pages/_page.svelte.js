import { d as ensure_array_like, f as attr, e as escape_html, h as stringify, c as pop, p as push } from "../../chunks/index.js";
import { t as toUpperCase } from "../../chunks/utils.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const subSet = data.pokemon.slice(0, 150);
  const each_array = ensure_array_like(subSet);
  $$payload.out += `<h1>All Pokemon</h1> <ul class="svelte-5zrsop"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let result = each_array[$$index];
    $$payload.out += `<li class="svelte-5zrsop"><a${attr("href", `/pokemon/${stringify(result.name)}`)} class="svelte-5zrsop">${escape_html(toUpperCase(result.name))} <img${attr("src", result.image)}${attr("alt", result.name)} class="svelte-5zrsop"></a></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
export {
  _page as default
};
