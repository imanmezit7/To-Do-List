import { deleteTodo, updateTodo } from '../../../../todoiman/todoapi';

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await deleteTodo(id);
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete todo' }), {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const updated = await updateTodo(id, body);
    return new Response(JSON.stringify(updated), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update todo' }), {
      status: 500,
    });
  }
}
