import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BG1NVYW7.js","_app/immutable/chunks/DHXprdGT.js","_app/immutable/chunks/DwpM3gan.js","_app/immutable/chunks/CM22TxpY.js","_app/immutable/chunks/DwLp5XFn.js"];
export const stylesheets = ["_app/immutable/assets/2.bN2qR5ZJ.css"];
export const fonts = [];
