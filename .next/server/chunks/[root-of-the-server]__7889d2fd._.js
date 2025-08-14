module.exports = {

"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/pages/api/todos/index.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>handler
});
function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({
            message: 'GET todos'
        });
    } else if (req.method === 'POST') {
        // Handle POST request
        res.status(201).json({
            message: 'POST todo'
        });
    } else {
        res.setHeader('Allow', [
            'GET',
            'POST'
        ]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7889d2fd._.js.map