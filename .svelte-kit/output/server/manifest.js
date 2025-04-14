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
		client: {start:"_app/immutable/entry/start.L6CO7xsW.js",app:"_app/immutable/entry/app.C7Wk3srW.js",imports:["_app/immutable/entry/start.L6CO7xsW.js","_app/immutable/chunks/DTlkz4YA.js","_app/immutable/chunks/DwpM3gan.js","_app/immutable/chunks/CGw1vyHy.js","_app/immutable/entry/app.C7Wk3srW.js","_app/immutable/chunks/DwpM3gan.js","_app/immutable/chunks/CM22TxpY.js","_app/immutable/chunks/DHXprdGT.js","_app/immutable/chunks/CGw1vyHy.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
