import { createTodo } from '../../../app/todoiman/todoapi.js';

export default async function handler(req, res) 
{
  if (req.method === 'POST') 
    {
    try 
    {
      const newTodo = await createTodo(req.body);
      res.status(201).json(newTodo);
    } 
    catch (err) 
    {
      res.status(500).json({ error: 'Failed to create todo' });
    }
  } 
  else 
  {
    res.status(405).json({ error: 'Method not allowed' });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 347828a (Local changes before pulling from github)
