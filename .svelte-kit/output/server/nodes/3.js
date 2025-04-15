import * as server from '../entries/pages/pokemon/_name_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pokemon/_name_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/pokemon/[name]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.xRmUdzTF.js","_app/immutable/chunks/DONsT2GV.js","_app/immutable/chunks/DBFYOUMR.js","_app/immutable/chunks/BW4EsfgZ.js","_app/immutable/chunks/pW3pxD2P.js"];
export const stylesheets = ["_app/immutable/assets/3.BT20z7q8.css"];
export const fonts = [];
