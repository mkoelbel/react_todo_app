import React, { useState } from "react";

function TodoItem ({ index, todo, onEdit, onDelete }) {
    const [todoText, setTodoText] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setTodoText(event.target.value)
    };

    const handleSave = () => {  
        onEdit(index, todoText);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input type="text" value={todoText} onChange={handleChange}/>
                    <button type="submit">Save</button>
                </form>
            ) : (
                <li>
                    {todo}
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </li>
            )}
        </div>
    );
};

export default TodoItem;