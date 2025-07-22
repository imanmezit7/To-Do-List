'use client'
import {useState} from 'react';

export default function ToDo() 
{
    const [tasks, setTasks] = useState<{text: string; isDone: boolean}[]>([]);
    const [newTask, setNewTask] = useState('');
    
    const handleAddTask = () => {
      if (newTask.trim() === '') return;
      setTasks([...tasks, { text: newTask, isDone: false }]);
      setNewTask('');
    };
  
    const handleTaskDoneClick = (index: number) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].isDone = !updatedTasks[index].isDone;
      setTasks(updatedTasks);
    };
  
    const handleDeleteTask = (index: number) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
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
          width: "500px",
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
                flexGrow:1, //proportion of extra space
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
              type="button"
              onClick={handleAddTask}
              style={{
                height:"8vh",
                width:"33%",
                backgroundColor:"#fa5531",
                border:"5px solid #fa5531",
                borderRadius:"30px",
                fontFamily:"trebuchet ms",
                fontSize:"110%",
                fontWeight:"bold"
              }}
              >ADD</button>
            </div>
            
            <div
            style={{
              marginTop:"2rem",
              width:"100%"
            }}>

            {tasks.map((task, index) => (
              <div
              key={index}
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
            </span>

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
