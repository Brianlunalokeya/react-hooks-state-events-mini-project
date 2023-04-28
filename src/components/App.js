import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (text) => {
    const updatedTasks = tasks.filter(task => task.text !== text);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={addTask}
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

