import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, title, remove }) => {
  if (!tasks.length) {
    return <h1 style={{ textAlign: "center", marginTop: 20 }}>Заданий нет!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {tasks.map((task, index) => (
        <Task remove={remove} number={index + 1} task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
