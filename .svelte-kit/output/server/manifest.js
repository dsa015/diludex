export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BHCBTgpp.js",app:"_app/immutable/entry/app.CRyulgNS.js",imports:["_app/immutable/entry/start.BHCBTgpp.js","_app/immutable/chunks/yEVCNVuf.js","_app/immutable/chunks/DBFYOUMR.js","_app/immutable/chunks/DUN1clij.js","_app/immutable/entry/app.CRyulgNS.js","_app/immutable/chunks/DBFYOUMR.js","_app/immutable/chunks/BW4EsfgZ.js","_app/immutable/chunks/DONsT2GV.js","_app/immutable/chunks/DUN1clij.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/pokemon/[name]",
				pattern: /^\/pokemon\/([^/]+?)\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
