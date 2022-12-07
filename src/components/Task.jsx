import React from "react";
import MyButton from "./UI/button/MyButton";

const Task = (props) => {
  return (
    <div className="task">
      <div>
        <strong>
          {props.number}. {props.task.title}
        </strong>
        <div>{props.task.body}</div>
      </div>
      <div>
        <MyButton onClick={() => props.remove(props.task)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default Task;
