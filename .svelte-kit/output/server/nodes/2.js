import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BJP41SGt.js","_app/immutable/chunks/DONsT2GV.js","_app/immutable/chunks/DBFYOUMR.js","_app/immutable/chunks/BW4EsfgZ.js","_app/immutable/chunks/pW3pxD2P.js"];
export const stylesheets = ["_app/immutable/assets/2.bN2qR5ZJ.css"];
export const fonts = [];
