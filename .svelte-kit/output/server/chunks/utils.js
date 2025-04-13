import { e as escape_html } from "./escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const toUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export {
  attr as a,
  toUpperCase as t
};
