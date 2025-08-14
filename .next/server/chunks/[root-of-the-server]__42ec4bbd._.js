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
"[project]/src/pages/api/todos/[id].js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>handler
});
(()=>{
    const e = new Error("Cannot find module '../../../../app/todoiman/todoapi.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'PUT') {
        try {
            const updated = await updateTodo(id, req.body);
            res.status(200).json(updated);
        } catch (err) {
            res.status(500).json({
                error: 'Failed to update todo'
            });
        }
    } else if (req.method === 'DELETE') {
        try {
            await deleteTodo(id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({
                error: 'Failed to delete todo'
            });
        }
    } else {
        res.status(405).json({
            error: 'Method not allowed'
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__42ec4bbd._.js.map