import { updateTodo, deleteTodo } from '../../../../app/todoiman/todoapi.js';

export default async function handler(req, res) 
{
  const { id } = req.query;

  if (req.method === 'PUT') 
  {
    try 
    {
      const updated = await updateTodo(id, req.body);
      res.status(200).json(updated);
    } 
    catch (err) 
    {
      res.status(500).json({ error: 'Failed to update todo' });
    }
  } 
  else if (req.method === 'DELETE') 
  {
    try 
    {
      await deleteTodo(id);
      res.status(204).end();
    } 
    catch (err) 
    {
      res.status(500).json({ error: 'Failed to delete todo' });
    }
  } 
  else 
  {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
