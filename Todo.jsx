
import { useState } from 'react'
import './Todo.css'

function Todo() {

    const [tasks, setTasks] = useState ()


    const inputChange = (event) =>{
        setInputValue (event.target.value);
    }

    tasks[

        {
            identificationNumber: 1,
            text: "Reading Quran ",
            executed: true
   
        },

        {
            identificationNumber: 2,
            text: "Praying Tahajjud",
            executed: false,
        }
    ]

    const [textInput, setTextInput] = useState("");
    function addText(text) {
        const textInput ={
            identificationNumber: 1,
            text: inputValue(),
            executed: false,
        };
        setTasks ([tasks, newTask])
        setText('')
    }

    function editTask(text) {
        setTasks(tasks (tasks.editTask.onChange))      
    }

    function deleteTask(identificationNumber) {
        setTasks(tasks.filter (task => task.identificationNumber !== identificationNumber))
      
    }
 

    return (
      <>
       
       <div className='todo-items'>

            <input onChange={inputChange}  type="text" placeholder='input your to-do activities' value={inputChange}></input>

            <button onClick={()=> addText()}> Add Task</button>

       </div>

       <div className="todo-properties">
                <input 
                type="checkbox"
                checked={tasks.completed}
                onChange={handleChange}
                />
                
                <p>{tasks.text}</p>
                <button onClick={() => deleteTask(tasks.identification)}>

                </button>
            </div>
    
      </>
    )
  }
  
  export default Todo