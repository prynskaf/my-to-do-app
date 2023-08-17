import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div>
       <h1>Todo App</h1>
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
