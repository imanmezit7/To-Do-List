// src/pages/api/todos/get.js

import { getTodos } from '../../../todoiman/todoapi.js';


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const todos = await getTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch todos' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
