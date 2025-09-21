import React, { useState } from 'react'

function App() {
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState("")
  const [error,setError] = useState("")

function handleChange(e){
  setTodo(e.target.value)
}
function handleSubmit(){
  if(todo == "") {
         setError("NO VALUE IN INPUT")
  }
  setTodos(prev=>[...prev,todo])
  setTodo("")
}
  
  return (
    <div className='min-h-screen min-w-screen'>
      {error != "" &&  <div className="fixed inset-0 z-10 bg-black/30 backdrop-blur-xs flex items-center justify-center flex-col">
                <div className='p-4 '>An error Occured : {error}</div>
                <button onClick={()=>{setError("")}} className='border rounded-2xl p-2 '>okay</button>
        </div>}
      <div className='flex justify-center items-center p-6 flex-col'>
        <input type="text" value={todo}
        onChange={(e)=>handleChange(e)} className='border placeholder ' placeholder='Enter your todo'/>
        
        <div className='border m-2 min-h-40 min-w-46 flex justify-center'>
          {todos.length == 0 ? <div>No Todos yet </div> :
          <ol className='min-w-full  '> 
            {todos.map((todo,index)=>{
            return( 
              <li key={index} className='border flex justify-center'>
                {todo}
              </li>
             
              )})}
            </ol>}
           
        </div>
        <button className='rounded-xl border p-2' onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  )
}

export default App