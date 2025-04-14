import * as server from '../entries/pages/pokemon/_name_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pokemon/_name_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/pokemon/[name]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CJJb3QL0.js","_app/immutable/chunks/DHXprdGT.js","_app/immutable/chunks/DwpM3gan.js","_app/immutable/chunks/CM22TxpY.js","_app/immutable/chunks/DwLp5XFn.js"];
export const stylesheets = ["_app/immutable/assets/3.BjR2eXEI.css"];
export const fonts = [];
