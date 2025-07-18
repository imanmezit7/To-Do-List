export default function ToDo() 
{
    return (
      <div
       style={{backgroundColor:"white;", minHeight: "100vh"}}>

        <table
            style={{
                position: "absolute", 
                left: "50%", 
                top: "50%",
                transform: "translate(-50%, -50%)",
                border:"darkblue",
                borderWidth:"5px",
                borderStyle:"solid",
                borderRadius:"10px",
                width:"34%", 
                height:"80vh",
                backgroundColor:"white"
                }}>
            
                <thead
                    style={{
                        
                        textAlign:"left",
                        verticalAlign:"top",
                        color:"darkblue",
                        fontFamily:"trebuchet ms",
                        fontSize:"150%"
                        }}>

                    <tr>
                        <th>
                        &nbsp;&nbsp;To-Do List 📝
                        </th>

                    </tr>

                </thead>

        </table>

      </div>

    );


}