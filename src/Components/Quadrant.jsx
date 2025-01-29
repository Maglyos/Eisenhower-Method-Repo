import React from "react";

const Quadrant = ({ title, tasks, onDelete }) => {
  return (
    <div className="quadrant">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quadrant;