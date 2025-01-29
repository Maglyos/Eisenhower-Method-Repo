import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [urgency, setUrgency] = useState(false);
  const [importance, setImportance] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      urgent: urgency,
      important: importance,
    };

    addTask(newTask);
    setTask("");
    setUrgency(false);
    setImportance(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task..."
      />
      <label>
        <input
          type="checkbox"
          checked={urgency}
          onChange={() => setUrgency(!urgency)}
        />
        Urgent
      </label>
      <label>
        <input
          type="checkbox"
          checked={importance}
          onChange={() => setImportance(!importance)}
        />
        Important
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;