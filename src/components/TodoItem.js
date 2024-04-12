import React, { useState } from "react";

function TodoItem ({ index, todo, onEdit, onDelete }) {
    const [newTodo, setNewTodo] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (originalTodo) => {
        setNewTodo(originalTodo);
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
                <li>
                    {todo}
                    <button onClick={() => handleEdit(todo)}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </li>
            )}
        </div>
    );
};

export default TodoItem;