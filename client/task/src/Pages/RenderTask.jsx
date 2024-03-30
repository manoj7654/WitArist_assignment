import React, { useEffect, useState } from "react";
import TaskItem from "../Components/TaskItem";
import "./Render.css";
const RenderTask = () => {
  let url = "https://defiant-sweatshirt-elk.cyclic.app/tasks";
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  async function fetchTask() {
    setLoading(true);
    try {
      const result = await fetch(`${url}/allTask`);

      const res = await result.json();
      setTask(res);
      setLoading(false);
      setErr(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErr(true);
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
  const handleEdit = async (
    _id,
    editedTitle,
    editedDescription,
    editedPriority,
    editedCategory
  ) => {
    try {
      const result = await fetch(`${url}/edit/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: editedTitle,
          description: editedDescription,
          priority: editedPriority,
          category: editedCategory,
        }),
      });
      const res = await result.json();
      if (result.ok) {
        alert(res.message);
        const updatedTasks = task.map((task) => {
          if (task._id === _id) {
            return {
              ...task,
              title: editedTitle,
              description: editedDescription,
              priority: editedPriority,
              category: editedCategory,
            };
          }
          return task;
        });
        setTask(updatedTasks);
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);
  const filteredTasks = filter
    ? task.filter(
        (task) => task.category.toLowerCase() === filter.toLowerCase()
      )
    : task;

  const priorityValues = {
    high: 3,
    medium: 2,
    low: 1,
  };

  const sortedTasks = sortBy
    ? filteredTasks.sort((a, b) => {
        const priorityA = priorityValues[a.priority];
        const priorityB = priorityValues[b.priority];
        if (sortBy === "priorityHighToLow") {
          return priorityB - priorityA;
        } else if (sortBy === "priorityLowToHigh") {
          return priorityA - priorityB;
        }
        return 0;
      })
    : filteredTasks;

  return loading ? (
    <h1>Loading...</h1>
  ) : err ? (
    <h1>Something went wrong</h1>
  ) : (
    <div>
      <h1>Task List</h1>
      <div className="sort">
        <label>Filter by Category: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          {[...new Set(task.map((task) => task.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label>Sort by Priority: </label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="priorityHighToLow">Priority High to Low</option>
          <option value="priorityLowToHigh">Priority Low to High</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Category</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((ele) => {
            // console.log(ele.completed)
            return (
              <TaskItem
                key={ele._id}
                _id={ele._id}
                title={ele.title}
                description={ele.description}
                priority={ele.priority}
                category={ele.category}
                handleEdit={handleEdit}
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
