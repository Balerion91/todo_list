import React from "react";
import "./styles/App.css";
import { useState } from "react";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="App">
      <TaskForm add={addTask} />
      <TasksList remove={removeTask} tasks={tasks} title="Список заданий" />
      Привет привет
    </div>
  );
}

export default App;
