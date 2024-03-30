import React, { useState }  from 'react'
import "./AddTask.css"

const AddTask = () => {
    const [text,setText]=useState({title:"",description:"",priority:"",category:""})
    const handleChange=(e)=>{
      setText({...text,[e.target.name]:e.target.value})
    }
  
    const addTodo=async()=>{
    try {
      const result=await fetch("https://defiant-sweatshirt-elk.cyclic.app/tasks/add",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(text)
      })
      const res=await result.json();
      console.log(res);
      if(result.ok){
        alert(res.message)
        setText(res)
      }else{
        alert(res.message)
      }
    } catch (error) {
      console.log(error)
    }
  
    setText("")
    }
  
    return (
      <div>
          <h1>Add Task </h1>
           <div className="add">
        
        <div className="form">
              <input type="text" name="title" id="title" placeholder='Enter Title ' onChange={handleChange} />
              <input type="text" name="description" id="desc" placeholder='Enter Description' onChange={handleChange} />
              <input type="text" name="priority" id="priority" placeholder='Enter Priority(low,medium,high) ' onChange={handleChange} />
              <input type="text" name="category" id="cat" placeholder='Enter Category' onChange={handleChange} />
              <button id="sub" onClick={addTodo}>Add</button>       
  
        </div>
           </div>
      </div>
    )
}

export default AddTask