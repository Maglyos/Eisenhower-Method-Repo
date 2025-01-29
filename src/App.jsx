import React, { useState } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Eisenhower To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;