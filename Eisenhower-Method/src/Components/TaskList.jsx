import React from "react";
import Quadrant from "./Quadrant";

const TaskList = ({ tasks, onDelete }) => {
  const categorizeTasks = (urgent, important) => {
    return tasks.filter(
      (task) => task.urgent === urgent && task.important === important
    );
  };

  return (
    <div className="task-list">
      <Quadrant
        title="Urgent & Important"
        tasks={categorizeTasks(true, true)}
        onDelete={onDelete}
      />
      <Quadrant
        title="Not Urgent & Important"
        tasks={categorizeTasks(false, true)}
        onDelete={onDelete}
      />
      <Quadrant
        title="Urgent & Not Important"
        tasks={categorizeTasks(true, false)}
        onDelete={onDelete}
      />
      <Quadrant
        title="Not Urgent & Not Important"
        tasks={categorizeTasks(false, false)}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TaskList;