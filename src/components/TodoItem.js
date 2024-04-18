import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { IoMdReturnRight } from 'react-icons/io';
import '../styles.css';

function TodoItem ({ index, todo, onEdit, onDelete }) {
    const [newTodoText, setNewTodoText] = useState(todo.text);

    const handleEdit = () => {
        todo.editing = true;
        setNewTodoText(todo.text);
        onEdit(index, todo);
    };

    const handleChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handleSave = (event) => {
        event.preventDefault();
        todo.text = newTodoText;
        todo.editing = false;
        onEdit(index, todo);
    };

    const toggleIsCompleted = () => {
        todo.completed = !todo.completed;
        onEdit(index, todo);
    };

    return (
        <div>
            {todo.editing ? (
                <form onSubmit={handleSave}>
                    <input type="text" value={newTodoText} onChange={handleChange}/>
                    <button type="submit"><IoMdReturnRight className="button save-icon"/></button>
                </form>
            ) : (
                <li className="todo-item">
                    <div 
                        onClick={handleEdit} 
                        className={`todo-text ${todo.completed ? "todo-completed" : ""}`}
                    >
                        {todo.text}
                    </div>
                    <button onClick={toggleIsCompleted}><FaCheck className="button done-icon"/></button>
                    <button onClick={onDelete}><FaTimes className="button delete-icon"/></button>
                </li>
            )}
        </div>
    );
};

export default TodoItem;