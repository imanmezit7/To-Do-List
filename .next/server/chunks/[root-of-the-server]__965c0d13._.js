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
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/timers [external] (timers, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/timers/promises [external] (timers/promises, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("timers/promises", () => require("timers/promises"));

module.exports = mod;
}}),
"[project]/src/app/todoiman/todoapi.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createTodo": ()=>createTodo,
    "deleteTodo": ()=>deleteTodo,
    "getTodos": ()=>getTodos,
    "updateTodo": ()=>updateTodo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$todoiman$2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/todoiman/node_modules/mongodb/lib/index.js [api] (ecmascript)");
;
const uri = 'mongodb://localhost:27017';
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$todoiman$2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__["MongoClient"](uri);
async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('ToDoListDB');
        return db;
    } catch (err) {
        console.error('Connection error:', err);
    }
}
connect();
async function getTodos() {
    const db = await connect();
    return await db.collection('todos').find().toArray();
    //TURBOPACK unreachable
    ;
}
async function createTodo(data) {
    const db = await connect();
    const result = await db.collection('todos').insertOne(data);
    return {
        _id: result.insertedId.toString(),
        ...data
    };
}
async function updateTodo(id, data) {
    const db = await connect();
    await db.collection('todos').updateOne({
        _id: new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$todoiman$2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ObjectId"](id)
    }, {
        $set: data
    });
    return await db.collection('todos').findOne({
        _id: new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$todoiman$2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ObjectId"](id)
    });
}
async function deleteTodo(id) {
    const db = await connect();
    await db.collection('todos').deleteOne({
        _id: new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$todoiman$2f$node_modules$2f$mongodb$2f$lib$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__["ObjectId"](id)
    });
}
;
}),
"[project]/src/pages/api/todos/[id].js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>handler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$todoiman$2f$todoapi$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/todoiman/todoapi.js [api] (ecmascript)");
;
async function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'PUT') {
        try {
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$todoiman$2f$todoapi$2e$js__$5b$api$5d$__$28$ecmascript$29$__["updateTodo"])(id, req.body);
            res.status(200).json(updated);
        } catch (err) {
            res.status(500).json({
                error: 'Failed to update todo'
            });
        }
    } else if (req.method === 'DELETE') {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$todoiman$2f$todoapi$2e$js__$5b$api$5d$__$28$ecmascript$29$__["deleteTodo"])(id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({
                error: 'Failed to delete todo'
            });
        }
    } else {
        res.setHeader('Allow', [
            'PUT',
            'DELETE'
        ]);
        res.status(405).json({
            error: 'Method not allowed'
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__965c0d13._.js.map