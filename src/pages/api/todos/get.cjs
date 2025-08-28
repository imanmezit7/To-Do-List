import { getTodos } from '../../../app/todoiman/todoapi.js';

export default async function handler(req, res) 
{
  if (req.method === 'GET') 
    {
    try 
    {
      const todos = await getTodos();
      res.status(200).json(todos);
    } 
    catch (err) 
    {
      res.status(500).json({ error: 'Failed to fetch todos' });
    }
  } 
  else 
  {
    res.status(405).json({ error: 'Method not allowed' });
  }
}