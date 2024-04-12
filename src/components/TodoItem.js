import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoMdReturnRight } from 'react-icons/io';
import '../styles.css';

function TodoItem ({ index, todo, onEdit, onDelete }) {
    const [newTodo, setNewTodo] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setNewTodo(todo);
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleSave = () => {
        onEdit(index, newTodo);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input type="text" value={newTodo} onChange={handleChange}/>
                    <button type="submit"><IoMdReturnRight className="button save-icon"/></button>
                </form>
            ) : (
                <li className="todo-item">
                    <div onClick={handleEdit} className="todo-text">{todo}</div>
                    <button onClick={onDelete}><FaTimes className="button delete-icon"/></button>
                </li>
            )}
        </div>
    );
};

export default TodoItem;