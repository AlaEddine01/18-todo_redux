import React from "react";
import "./App.css";
import NewToDo from "./Components/NewToDo";
import ToDoList from "./Components/ToDoList";

function App() {
  return <div className="App">
    <NewToDo />
    <ToDoList />
  </div>;
}

export default App;
