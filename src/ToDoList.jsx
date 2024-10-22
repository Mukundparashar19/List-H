import React, {useState} from "react"

function ToDoList() {

 const [tasks, setTasks] = useState([])
 const[newTask, setNewTask] = useState('')

function handleInputChange(event){
  setNewTask(event.target.value)
}

function addTask(){

if(newTask.trim() !== ""){
  setTasks(t => [...t, newTask]) // spred the existing task + newTask
  setNewTask('') // adding the new task
} else{
  alert('khali h')
}


}

function deleteTask(index){
const updatedTasks = tasks.filter((element, i) => i !== index) // filter out the element that matches with i
setTasks(updatedTasks) // updated the filtered array
}

function moveTaskUp(index){

  if(index > 0){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
    setTasks(updatedTasks);
  }
}

function moveTaskDown(index){

  if(index < tasks.length - 1){
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
    setTasks(updatedTasks);
  }

}


    return(
        <div className="bg-black h-screen">
        <div class=" text-center py-10 mx-auto max-w-screen-xl ">
          <input type="text" id="large-input"
          value={newTask}
          onChange={handleInputChange}
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <button type="button"
          onClick={addTask}
          class=" mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add a todo</button>
      
      </div>
<ol className=" text-center space-y-5 border-red-400 ">

{tasks.map((task, index) =>
<li key={index} className="text-red-400">
  <span className="text">{task}</span>   
  <button 
  className="delete-button border-2 border-red-300 mx-5 "
  onClick={ () => deleteTask(index) }>
    Delete
  </button>

  <button 
  className="delete-button border-2 border-red-300 mx-5 "
  onClick={ () => moveTaskUp(index) }>
    🔝
  </button>

  <button 
  className="delete-button border-2 border-red-300 mx-5 "
  onClick={ () => moveTaskDown(index) }>
    🔻
  </button>
</li>
)}

</ol>
       </div>
    
    )
}

export default ToDoList