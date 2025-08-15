'use client'
import {useState, useEffect} from 'react';

type Task=
{
    _id: string;
    text: string;
    isDone: boolean;
    dueDate?: string;
    priority: "high"|"medium"|"low";
};

export default function ToDo() 
{
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState<{id: string; text: string} | null>(null);
    const [newDueDate, setNewDueDate] = useState('');
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
    const [selectedPriority, setSelectedPriority] = useState< "high"|"medium"|"low"|null>(null);

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
    
    const playDoneSound=()=>
    {
        const audio=new Audio('/sounds/doneSound.mp3');
        audio.play();
    };

    const playDeleteSound=()=>
    {
        const audio=new Audio('/sounds/deleteSound.mp3');
        audio.play();
    }

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
                priority: selectedPriority || "low",
            }),
          });

          const created=await res.json();
          setTasks((prev)=>[...prev, created]);
          setNewTask('');
          setNewDueDate('');
          setSelectedPriority(null);
    };
    
    const handleTaskDoneClick = async (taskId: string) => 
    {
      const index = tasks.findIndex((t) => t._id === taskId);
      if (index === -1) return;
      const task = tasks[index];
      const updated = { ...task, isDone: !task.isDone };

        const res=await fetch(`/api/todos/${task._id}`,
        {
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({isDone: !task.isDone}),
        });

        const result=await res.json();
        const updatedTasks=[...tasks];
        updatedTasks[index]=result;
        setTasks(updatedTasks);
        playDoneSound();
    };
  
    const handleDeleteTask = async (taskId: string) => 
    {
        const index = tasks.findIndex((t) => t._id === taskId);
        if (index === -1) return;
        await fetch(`/api/todos/${taskId}`,
        {
            method:'DELETE',
        });

        setTasks((prev)=>prev.filter((_,i)=>i !==index));

        playDeleteSound();
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

    const filteredTasks = tasks.filter(task => 
    {
        if (filter === 'active') return !task.isDone;
        if (filter === 'completed') return task.isDone;
        return true;
    });

    const getPriorityEmoji=(priority: string) =>
    {
        if(priority==="high") return "🔴";
        if(priority==="medium") return "🌕";
        if(priority==="low") return "🔵";
        return "";
    }
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
            
            
            <div style={{marginBottom: '1rem'}}>  
              <button 
                onClick={() => setFilter('all')}
                style={{
                  marginRight: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: filter === 'all' ? '#fa5531' : 'lightgray',
                  color: filter === 'all' ? 'white' : 'midnightblue',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: filter === 'all' ? 'bold' : 'normal',
                }}>
                All
              </button>

              <button 
                onClick={() => setFilter('active')}
                style={{
                  marginRight: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: filter === 'active' ? '#fa5531' : 'lightgray',
                  color: filter === 'active' ? 'white' : 'midnightblue',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: filter === 'active' ? 'bold' : 'normal',
                }}>
                Active
              </button>
              <button 
                onClick={() => setFilter('completed')}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: filter === 'completed' ? '#fa5531' : 'lightgray',
                  color: filter === 'completed' ? 'white' : 'midnightblue',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: filter === 'completed' ? 'bold' : 'normal',
                }}>
                Completed
              </button>
            </div>

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

            <div>
              <span style={{
                marginRight:"1rem",
                color:"midnightblue",
                fontWeight:"bold"
              }}>Priority:</span>

              <button
                onClick={()=> setSelectedPriority("high")}
                style={{
                  fontSize:"100%",
                  border: selectedPriority=="high" ? "2px solid red" : "none", 
                  marginRight: "0.5rem",
                  background:"transparent",
                  cursor:"pointer"
                }}>
                🔴
              </button>

              <button
                onClick={()=> setSelectedPriority("medium")}
                style={{
                  fontSize:"100%",
                  border: selectedPriority=="medium" ? "2px solid red" : "none", 
                  marginRight: "0.5rem",
                  background:"transparent",
                  cursor:"pointer"
                }}>
                🌕
              </button>

              <button
                onClick={()=> setSelectedPriority("low")}
                style={{
                  fontSize:"100%",
                  border: selectedPriority=="low" ? "2px solid red" : "none", 
                  marginRight: "0.5rem",
                  background:"transparent",
                  cursor:"pointer"
                }}>
                🔵
              </button>
            </div>

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

            {filteredTasks.map((task) => (
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
              onClick={() => handleTaskDoneClick(task._id)}
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
                <span 
                  style={{
                    marginRight: "0.5rem"
                  }}>
                    {getPriorityEmoji (task.priority)}
                  </span>
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
              onClick={() => handleDeleteTask(task._id)}
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
