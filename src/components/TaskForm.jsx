import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const TaskForm = ({ add }) => {
  const [task, setTask] = useState({ title: "", body: "" });

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now(),
    };
    add(newTask);
    setTask({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        type="text"
        placeholder="Задание"
      />
      <MyInput
        value={task.body}
        onChange={(e) => setTask({ ...task, body: e.target.value })}
        type="text"
        placeholder="Описание"
      />
      <MyButton onClick={addNewTask}>Добавить задание</MyButton>
    </form>
  );
};

export default TaskForm;
