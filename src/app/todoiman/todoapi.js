import { MongoClient, ObjectId } from 'mongodb';

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function connect() 
{
  try 
  {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('ToDoListDB');
    return db; 
  } 
  catch (err) 
  {
    console.error('Connection error:', err);
  }
}
connect();

async function getTodos()
{
    const db=await connect();
    return await db.collection('todos').find().toArray();
}

async function createTodo(data)
{
    const db=await connect();
    const result=await db.collection('todos').insertOne(data);
    return {_id: result.insertedId, ...data};
}

async function updateTodo(id, data)
{
    const db=await connect();

    await db.collection('todos').updateOne
    (
        {_id:new ObjectId(id)},
        {$set:data}
    );
    return await db.collection('todos').findOne({_id:new ObjectId(id)});
}

async function deleteTodo(id)
{
    const db=await connect();
    await db.collection('todos').deleteOne({_id:new ObjectId(id)});
}

export
{
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
