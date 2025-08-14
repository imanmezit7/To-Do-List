module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/todoiman/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ToDo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ToDo() {
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTask, setNewTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [editTask, setEditTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newDueDate, setNewDueDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTasks();
    }, []);
    const fetchTasks = async ()=>{
        const res = await fetch('api/todos/get');
        const data = await res.json();
        setTasks(data);
    };
    const playDoneSound = ()=>{
        const audio = new Audio('/sounds/doneSound.mp3');
        audio.play();
    };
    const playDeleteSound = ()=>{
        const audio = new Audio('/sounds/deleteSound.mp3');
        audio.play();
    };
    const handleAddTask = async ()=>{
        if (newTask.trim() === '') return;
        const res = await fetch('api/todos/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: newTask,
                isDone: false,
                dueDate: newDueDate || null
            })
        });
        const created = await res.json();
        setTasks((prev)=>[
                ...prev,
                created
            ]);
        setNewTask('');
        setNewDueDate('');
    };
    const handleTaskDoneClick = async (taskId)=>{
        const index = tasks.findIndex((t)=>t._id === taskId);
        if (index === -1) return;
        const task = tasks[index];
        const updated = {
            ...task,
            isDone: !task.isDone
        };
        const res = await fetch(`/api/todos/${task._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isDone: !task.isDone
            })
        });
        const result = await res.json();
        const updatedTasks = [
            ...tasks
        ];
        updatedTasks[index] = result;
        setTasks(updatedTasks);
        playDoneSound();
    };
    const handleDeleteTask = async (taskId)=>{
        const index = tasks.findIndex((t)=>t._id === taskId);
        if (index === -1) return;
        await fetch(`/api/todos/${taskId}`, {
            method: 'DELETE'
        });
        setTasks((prev)=>prev.filter((_, i)=>i !== index));
        playDeleteSound();
    };
    const handleSaveEdit = async ()=>{
        if (!editTask) return;
        const res = await fetch(`/api/todos/${editTask.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: editTask.text
            })
        });
        const updated = await res.json();
        setTasks((prev)=>prev.map((t)=>t._id === updated._id ? updated : t));
        setEditTask(null);
    };
    const filteredTasks = tasks.filter((task)=>{
        if (filter === 'active') return !task.isDone;
        if (filter === 'completed') return task.isDone;
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "midnightblue",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: "white",
                minHeight: "80vh",
                border: "10px solid midnightblue",
                borderRadius: "20px",
                width: "800px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "40px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: "160%",
                        color: "midnightblue",
                        marginBottom: "2rem",
                        fontFamily: "trebuchet ms"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "To-Do List 📝"
                    }, void 0, false, {
                        fileName: "[project]/src/app/todoiman/page.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/todoiman/page.tsx",
                    lineNumber: 157,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter('all'),
                            style: {
                                marginRight: '0.5rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: filter === 'all' ? '#fa5531' : 'lightgray',
                                color: filter === 'all' ? 'white' : 'midnightblue',
                                border: 'none',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontWeight: filter === 'all' ? 'bold' : 'normal'
                            },
                            children: "All"
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter('active'),
                            style: {
                                marginRight: '0.5rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: filter === 'active' ? '#fa5531' : 'lightgray',
                                color: filter === 'active' ? 'white' : 'midnightblue',
                                border: 'none',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontWeight: filter === 'active' ? 'bold' : 'normal'
                            },
                            children: "Active"
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 185,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter('completed'),
                            style: {
                                padding: '0.5rem 1rem',
                                backgroundColor: filter === 'completed' ? '#fa5531' : 'lightgray',
                                color: filter === 'completed' ? 'white' : 'midnightblue',
                                border: 'none',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                fontWeight: filter === 'completed' ? 'bold' : 'normal'
                            },
                            children: "Completed"
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 199,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/todoiman/page.tsx",
                    lineNumber: 170,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            id: "todo1",
                            name: "ToDoPraksa",
                            placeholder: "Add your task",
                            value: newTask,
                            onChange: (e)=>setNewTask(e.target.value),
                            rows: 1,
                            style: {
                                width: "60%",
                                height: "8vh",
                                backgroundColor: "lightgray",
                                border: "5px solid lightgray",
                                borderRadius: "30px",
                                color: "midnightblue",
                                fontFamily: "trebuchet ms",
                                fontSize: "95%",
                                textAlign: "left",
                                padding: "0.5rem",
                                resize: "none",
                                overflowWrap: "break-word",
                                wordBreak: "break-word" //browser is allowed to break a long word
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            value: newDueDate,
                            onChange: (e)=>setNewDueDate(e.target.value),
                            style: {
                                marginLeft: "0.5rem",
                                height: "8vh",
                                backgroundColor: "lightgray",
                                border: "5px solid lightgray",
                                borderRadius: "30px",
                                color: "midnightblue",
                                fontFamily: "trebuchet ms",
                                fontSize: "95%",
                                padding: "0.5rem"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleAddTask,
                            style: {
                                marginLeft: "0.5rem",
                                height: "8vh",
                                width: "25%",
                                backgroundColor: "#fa5531",
                                border: "5px solid #fa5531",
                                borderRadius: "30px",
                                fontFamily: "trebuchet ms",
                                fontSize: "110%",
                                fontWeight: "bold"
                            },
                            children: "ADD"
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/todoiman/page.tsx",
                    lineNumber: 214,
                    columnNumber: 13
                }, this),
                editTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        marginTop: "1rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: editTask.text,
                            onChange: (e)=>setEditTask({
                                    ...editTask,
                                    text: e.target.value
                                }),
                            rows: 1,
                            style: {
                                width: "40%",
                                height: "8vh",
                                backgroundColor: "lightgray",
                                border: "5px solid lightgray",
                                borderRadius: "30px",
                                color: "midnightblue",
                                fontFamily: "trebuchet ms",
                                fontSize: "95%",
                                textAlign: "left",
                                padding: "0.5rem",
                                resize: "none",
                                overflowWrap: "break-word",
                                wordBreak: "break-word" //browser is allowed to break a long word
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 290,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSaveEdit,
                            style: {
                                marginLeft: "0.5rem",
                                height: "8vh",
                                width: "20%",
                                backgroundColor: "#00C73E",
                                border: "2px solid #00C73E",
                                borderRadius: "30px",
                                fontFamily: "trebuchet ms",
                                fontSize: "110%",
                                fontWeight: "bold",
                                color: "white"
                            },
                            children: "SAVE"
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 313,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setEditTask(null),
                            style: {
                                marginLeft: "0.5rem",
                                height: "8vh",
                                width: "20%",
                                backgroundColor: "#BF0814",
                                border: "2px solid #BF08145",
                                borderRadius: "30px",
                                fontFamily: "trebuchet ms",
                                fontSize: "110%",
                                fontWeight: "bold",
                                color: "white"
                            },
                            children: "CANCEL"
                        }, void 0, false, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 330,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/todoiman/page.tsx",
                    lineNumber: 283,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: "2rem",
                        width: "100%"
                    },
                    children: filteredTasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "1rem",
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleTaskDoneClick(task._id),
                                    style: {
                                        height: "4vh",
                                        width: "4vh",
                                        borderRadius: "30px",
                                        border: "3px solid #fa5531",
                                        backgroundColor: task.isDone ? "#fa5531" : "white",
                                        //backgroundColor:"white",
                                        //backgroundColor: "#fa5531",
                                        fontSize: "90%",
                                        color: "white",
                                        marginRight: "1rem"
                                    },
                                    children: task.isDone ? "✓" : ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/todoiman/page.tsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span" //for styling or grouping text or inline elements
                                , {
                                    style: {
                                        flexGrow: 1,
                                        fontSize: "100%",
                                        fontFamily: "trebuchet ms",
                                        color: "midnightblue",
                                        textDecoration: task.isDone ? "line-through" : "none"
                                    },
                                    children: [
                                        task.text,
                                        task.dueDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: "0.5rem",
                                                color: "gray",
                                                fontSize: "90%"
                                            },
                                            children: [
                                                "(Due: ",
                                                new Date(task.dueDate).toLocaleDateString(),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/todoiman/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/todoiman/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditTask({
                                            id: task._id,
                                            text: task.text
                                        }),
                                    style: {
                                        fontSize: "110%",
                                        marginLeft: "1rem",
                                        border: "none",
                                        cursor: "pointer"
                                    },
                                    children: "✏️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/todoiman/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteTask(task._id),
                                    style: {
                                        fontSize: "110%",
                                        marginLeft: "1rem",
                                        border: "none",
                                        cursor: "pointer"
                                    },
                                    children: "✖️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/todoiman/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, task._id, true, {
                            fileName: "[project]/src/app/todoiman/page.tsx",
                            lineNumber: 357,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/todoiman/page.tsx",
                    lineNumber: 350,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/todoiman/page.tsx",
            lineNumber: 144,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/todoiman/page.tsx",
        lineNumber: 135,
        columnNumber: 7
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ed34bdea._.js.map