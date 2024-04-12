import React, { useState } from 'react';
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
                    <button type="submit">Save</button>
                </form>
            ) : (
                <li className="todo-item">
                    <p className="todo-text" onClick={handleEdit}>{todo}</p>
                    <button onClick={onDelete}>Delete</button>
                </li>
            )}
        </div>
    );
};

export default TodoItem;