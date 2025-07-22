export default function ToDo() 
{
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

              <div
              style={{
                display:"flex",
                alignItems:"center",
                marginBottom: "1rem",
                width: "100%"
              }}>

              <button
              type="button"
              style={{
                height: "4vh",
                width: "4vh",
                borderRadius: "30px",
                border: "3px solid #fa5531",
                backgroundColor:"white",
                //backgroundColor: "#fa5531",
                fontSize: "90%",
                color: "white",
                marginRight: "1rem",
              }}>
            </button>

            <span //for styling or grouping text or inline elements
              style={{
                flexGrow: 1,
                fontSize: "100%",
                fontFamily: "trebuchet ms",
                color: "midnightblue",
              }}>
              Example Task
            </span>

            <button
              style={{
                fontSize: "110%",
                marginLeft: "1rem",
              }}>
              ✖️
            </button>
            </div>

        </div>
        
        </div>

      </div>

    );
}
