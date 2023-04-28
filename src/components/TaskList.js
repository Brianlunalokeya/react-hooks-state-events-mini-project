import React from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
        key={index} 
        text={task.text} 
        category={task.category} 
        onDeleteTask={onDeleteTask}
        className="task" />
      ))}
    </div>
  );
}

export default TaskList;


