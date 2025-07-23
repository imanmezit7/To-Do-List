const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function connect() 
{
  try 
  {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('ToDoListDB'); 
  } 
  catch (err) 
  {
    console.error('Connection error:', err);
  }
}
connect();