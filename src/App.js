import React, { useState } from 'react';
import './App.css';
import TodoAdderForm from './components/TodoAdderForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const editTodo = (index, newTodo) => {
    console.log(`App.js - index: ${index} and newTodo: ${newTodo}`)
    const updatedTodos = [...todos];
    updatedTodos[index] = newTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h3>To-Do List</h3>
      <TodoList todos={todos} onEditTodo={editTodo} onDeleteTodo={deleteTodo}/>
      <TodoAdderForm onAddTodo={addTodo}/>
    </div>
  );
}

export default App;