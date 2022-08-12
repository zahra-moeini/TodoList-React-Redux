import React,{useState} from "react";
import "./TodoInput.css";

const TodoInput=()=>{
    const [task,setTask]=useState("");

    const handleSubmit=()=>{};
    return(
        <from className="TodoInput" onsubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Enter Task"
            id="task"
            name="task"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button>Add Todo</button>

        </from>
    )
}

export default TodoInput;