import React, { useState } from 'react';
import TodoAdderForm from './components/TodoAdderForm';
import TodoList from './components/TodoList';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);

  const editTodo = (index, newTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newTodo;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.forEach(todo => todo.editing = false);
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <header>To-Do List</header>
      <TodoList 
        todos={todos} 
        onEditTodo={editTodo} 
        onDeleteTodo={deleteTodo}
      />
      <TodoAdderForm onAddTodo={addTodo}/>
    </div>
  );
}

export default App;