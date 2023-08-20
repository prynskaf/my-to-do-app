import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onToggle={() => toggleTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
