

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D_tUoF1S.js","_app/immutable/chunks/DONsT2GV.js","_app/immutable/chunks/DBFYOUMR.js"];
export const stylesheets = ["_app/immutable/assets/0.KrfumMBl.css"];
export const fonts = [];
