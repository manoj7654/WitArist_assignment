import React, { useEffect, useState } from "react";
import TaskItem from "../Components/TaskItem";

const RenderTask = () => {
    let url = "http://localhost:4500/tasks";
  const [task, setTask] = useState([]);
  async function fetchTask() {
    

    try {
      const result = await fetch(`${url}/allTask`);

      const res = await result.json();
      console.log(res);
      setTask(res);
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async (_id) => {
    try {
      const result = await fetch(`${url}/remove/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await result.json();
      if (result.ok) {
        alert(res.message);
      } else {
        alert(res.message);
      }
      let deleteData = task.filter((ele) => ele._id != _id);
      setTask(deleteData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (_id) => {
    try {
      const result = await fetch(`${url}/remove/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await result.json();
      console.log(res)
      if (result.ok) {
        alert(res.message);
      } else {
        alert(res.message);
      }
      let deleteData = task.filter((ele) => ele._id != _id);
      setTask(deleteData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <div>
      <h1>Task List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {task.map((ele) => {
            // console.log(ele.completed)
            return (
             <TaskItem
             _id={ele._id}
                title={ele.title}
                description={ele.description}
                priority={ele.priority}
                category={ele.category}
                handleToggle={handleEdit}
                handleDelete={handleDelete}
             />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderTask;
