import React from 'react'

const TaskItem = ({_id,title,description,priority,category,status,handleEdit,handleDelete}) => {
  return (
    <tr key={_id}>
    <td>{title}</td>
    <td>{description}</td>
    <td>{priority}</td>
    <td>{category}</td>
    <td><button onClick={()=>handleEdit(_id)} className="toggle">Edit</button></td>
    <td>
      <button onClick={()=>handleDelete(_id)} className="del">Delete</button>
    </td>
   
  </tr>
  )
}

export default TaskItem