import React from 'react'

export default function TodoItem({todo, onToggle}) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label>
        <input 
        type= 'checkbox'
        checked= {todo.completed}
        onChange={onToggle}
        className='todo-checkbox'
        />
        {""}
        {todo.text}
      </label>
    </div>
  );
};
