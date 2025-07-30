import { createTodo } from '../../../todoiman/todoapi';

export async function POST (req)
{
    try
    {
        const body=await req.json();
        const newTodo=await createBrotliDecompress(body);

        return new Response(JSON.stringify(newTodo),
        {
            status:201,
            headers:{'Content-Type':'application/json'},
        });
    }
    catch (error)
    {
        return new Response(JSON.stringify({error:'Failed to create todo'}),
        {
            status:500,
        });
    }
}