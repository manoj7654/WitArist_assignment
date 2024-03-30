import React,{useState} from 'react'
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import "./TaskItem.css";
const TaskItem = ({_id,title,description,priority,category,handleEdit,handleDelete}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedPriority, setEditedPriority] = useState(priority);
  const [editedCategory, setEditedCategory] = useState(category);


  const handleSave = () => {
    // Call the handleEdit function with updated values
    handleEdit(_id, editedTitle, editedDescription, editedPriority, editedCategory);
    // Exit editing mode after saving
    setIsEditing(false);
  };

  return (
    <tr key={_id}>
    <td>{isEditing ? <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} /> : title}</td>
      <td>{isEditing ? <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} /> : description}</td>
      <td>{isEditing ? <input type="text" value={editedPriority} onChange={(e) => setEditedPriority(e.target.value)} /> : priority}</td>
      <td>{isEditing ? <input type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} /> : category}</td>
      <td className='btn'>
        {isEditing ? (
          <button onClick={handleSave} className="toggle">Save</button>
        ) : (
          <FaPen  onClick={() => setIsEditing(true)} className="toggle"/>
        )}
      {!isEditing && (
         <MdDelete  onClick={() => handleDelete(_id)} className="del"/>
      
      )}
     </td>
  </tr>
  )
}

export default TaskItem