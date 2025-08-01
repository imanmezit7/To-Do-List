'use client'
import {useState, useEffect} from 'react';

type Task=
{
    _id:string;
    text:string;
    isDone:boolean;
    dueDate?: string;
};

export default function ToDo() 
{
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState<{id: string; text: string} | null>(null);
    const [newDueDate, setNewDueDate] = useState('');

    useEffect(()=>
    {
        fetchTasks();
    }, [])

    const fetchTasks=async()=> 
    {
        const res=await fetch('api/todos/get');
        const data=await res.json();
        setTasks(data);
        
    };
    
    const handleAddTask = async () => 
    {
        if (newTask.trim() === '') return;

        const res=await fetch('api/todos/post', 
          {
            method: "POST",
            headers:
            {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(
            {
                text: newTask,
                isDone: false,
                dueDate:newDueDate || null,
            }),
          });

          const created=await res.json();
          setTasks((prev)=>[...prev, created]);
          setNewTask('');
          setNewDueDate('');
    };
    
    const handleTaskDoneClick = async (index: number) => 
    {
        const task=tasks[index];
        const updated={...task, isDone:!task.isDone};

        const res=await fetch(`/api/todos/${task._id}`,
        {
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({isDone: !task.isDone}),
        })

        const result=await res.json();
        const updatedTasks=[...tasks];
        updatedTasks[index]=result;
        setTasks(updatedTasks);
    };
  
    const handleDeleteTask = async (index: number) => 
    {
        const task=tasks[index];
        await fetch(`/api/todos/${task._id}`,
        {
            method:'DELETE',
        });

        setTasks((prev)=>prev.filter((_,i)=>i !==index));
    };

    const handleSaveEdit=async()=>
    {
        if (!editTask) return;

        const res = await fetch(`/api/todos/${editTask.id}`,
        {
            method:'PUT',
            headers:
            {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({text:editTask.text}),
        });

        const updated=await res.json();
        setTasks((prev)=>
        prev.map((t)=> (t._id === updated._id ? updated:t)));
        setEditTask(null);
    };
    
    return (
      <div
       style={{
        backgroundColor:"midnightblue", 
        minHeight: "100vh",
        display: "flex",               
        justifyContent: "center",      
        alignItems: "center" 
        }}>
        
        <div
        style={{
          backgroundColor: "white",
          minHeight:"80vh",
          border:"10px solid midnightblue",
          borderRadius: "20px",
          width: "800px",
          display: "flex", //control over alignment, spacing, and layout direction of child elements
          flexDirection: "column", //children stacked vertically
          alignItems: "flex-start", //starting from the left side
          padding: "40px", 
        }}>

            <h1
            style={{
                fontSize:"160%",
                color:"midnightblue",
                marginBottom:"2rem",
                fontFamily:"trebuchet ms"
            }}>
                <b>
                  To-Do List 📝  
                </b>
            </h1>

            <div
            style={{
              display:"flex",
              alignItems:"center",
              width:"100%"
            }}>

            <textarea 
            id="todo1" 
            name="ToDoPraksa" 
            placeholder="Add your task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            rows={1}
            style={{
                width:"60%",
                height:"8vh",
                backgroundColor:"lightgray",
                border:"5px solid lightgray",
                borderRadius:"30px",
                color:"midnightblue",
                fontFamily:"trebuchet ms",
                fontSize:"95%",
                textAlign:"left",
                padding:"0.5rem",
                resize:"none", //no resizing allowed
                overflowWrap:"break-word", //a long word breaks into the next row so it can fit in the container
                wordBreak:"break-word" //browser is allowed to break a long word
            }}>
            </textarea>

            <input
              type="date"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
              style={{
                marginLeft: "0.5rem",
                height: "8vh",
                backgroundColor: "lightgray",
                border: "5px solid lightgray",
                borderRadius: "30px",
                color: "midnightblue",
                fontFamily: "trebuchet ms",
                fontSize: "95%",
                padding: "0.5rem"
              
              }}>
            </input>

            <button 
              type="button"
              onClick={handleAddTask}
              style={{
                marginLeft: "0.5rem",
                height:"8vh",
                width:"25%",
                backgroundColor:"#fa5531",
                border:"5px solid #fa5531",
                borderRadius:"30px",
                fontFamily:"trebuchet ms",
                fontSize:"110%",
                fontWeight:"bold"
              }}
              >ADD</button>
            </div>
            
            {
                editTask &&
                (
                    <div 
                    style={{
                      display:"flex",
                      alignItems:"center",
                      width:"100%",
                      marginTop:"1rem"
                    }}>
                      <textarea
                        value={editTask.text}
                        onChange={(e)=> setEditTask({...editTask, text: e.target.value})}
                        rows={1}
                        style={{
                          
                          width:"40%",
                          height:"8vh",
                          backgroundColor:"lightgray",
                          border:"5px solid lightgray",
                          borderRadius:"30px",
                          color:"midnightblue",
                          fontFamily:"trebuchet ms",
                          fontSize:"95%",
                          textAlign:"left",
                          padding:"0.5rem",
                          resize:"none", //no resizing allowed
                          overflowWrap:"break-word", //a long word breaks into the next row so it can fit in the container
                          wordBreak:"break-word" //browser is allowed to break a long word

                        }}>
                      </textarea>

                      <button
                        onClick={handleSaveEdit}
                        style={{
                          marginLeft: "0.5rem",
                          height: "8vh",
                          width: "20%",
                          backgroundColor: "#00C73E",
                          border: "2px solid #00C73E",
                          borderRadius: "30px",
                          fontFamily: "trebuchet ms",
                          fontSize: "110%",
                          fontWeight: "bold",
                          color: "white"
                        }}>
                          SAVE
                      </button>

                      <button
                        onClick={() => setEditTask(null)}
                        style={{
                          marginLeft: "0.5rem",
                          height: "8vh",
                          width: "20%",
                          backgroundColor: "#BF0814",
                          border: "2px solid #BF08145",
                          borderRadius: "30px",
                          fontFamily: "trebuchet ms",
                          fontSize: "110%",
                          fontWeight: "bold",
                          color: "white"
                        }}>
                        CANCEL
                      </button>
                    </div>
                )
            }

            <div
            style={{
              marginTop:"2rem",
              width:"100%"
            }}>

            {tasks.map((task, index) => (
              <div
              key={task._id}
              style={{
                display:"flex",
                alignItems:"center",
                marginBottom: "1rem",
                width: "100%"
              }}>

              <button
              type="button"
              onClick={() => handleTaskDoneClick(index)}
              style={{
                height: "4vh",
                width: "4vh",
                borderRadius: "30px",
                border: "3px solid #fa5531",
                backgroundColor: task.isDone ? "#fa5531" : "white",
                //backgroundColor:"white",
                //backgroundColor: "#fa5531",
                fontSize: "90%",
                color: "white",
                marginRight: "1rem",
              }}>
                 {task.isDone ? "✓" : ""}
            </button>

            <span //for styling or grouping text or inline elements
              style={{
                flexGrow: 1,
                fontSize: "100%",
                fontFamily: "trebuchet ms",
                color: "midnightblue",
                textDecoration: task.isDone ? "line-through" : "none"
              }}>
              {task.text}
              {task.dueDate && 
              (
                <span 
                style={{
                  marginLeft:"0.5rem",
                  color:"gray",
                  fontSize:"90%"
                }}>
                  (Due: {new Date(task.dueDate).toLocaleDateString()})
                </span>
            )}
            </span>
            
            
            <button
                onClick={() => setEditTask({ id: task._id, text: task.text })}
                style={{
                  fontSize: "110%",
                  marginLeft: "1rem",
                  border: "none",
                  cursor: "pointer",
                }}>
                ✏️
              </button>

            <button
              onClick={() => handleDeleteTask(index)}
              style={{
                fontSize: "110%",
                marginLeft: "1rem",
                border:"none",
                cursor: "pointer"
              }}>
              ✖️
            </button>
            </div>
            ))}
        </div>
        
        </div>

      </div>

    );
}
