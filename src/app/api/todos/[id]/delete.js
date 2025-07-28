const {delteTodo} = require('../../../todoiman/todoapi');

export async function DELETE(req, {params})
{
    try
    {
        const {id}=params;
        await deleteTodo(id);

        return new Response(null, {status:204});
    }
    catch(error)
    {
        return new Response(JSON.stringify({error:'Failed to delete todo'}),
        {
            status:500,
        });
    }
}