import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

function TodoAdderForm({ onAddTodo }) {
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const todoToAdd = {
            text: todoText, 
            editing: false,
            completed: false 
        }
        onAddTodo(todoToAdd);
        setTodoText("");
    };

    const handleChange = (event) => {
        setTodoText(event.target.value)
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={todoText} 
                placeholder="make the world a better place"
                onChange={handleChange} 
            />
            <button type="submit"><FaPlus className="button add-icon"/></button>
        </form>
    );
};

export default TodoAdderForm;
