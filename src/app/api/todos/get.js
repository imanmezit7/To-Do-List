const {getTodos} = require('../../todoiman/todoapi');

export async function GET()
{
    try
    {
        const todos=await getTodos();
        return new Response(JSON.stringfly(todos),
    {
        status:200,
        headers:{'Content-Type':'application/json',}
    });
    }
    catch (error)
    {
        return new Response(JSON.stringify({error:'Failed to fetch todos'}),
        {
            status:500,
        });
    }
}