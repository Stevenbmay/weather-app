import React from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import FilterTasks from "./components/FilterTasks";

function App() {
  return (
    <div>
      <TaskForm />
      <FilterTasks />
    </div>
  );
}

export default App;
