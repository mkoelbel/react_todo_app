import React, { useState } from 'react';

function TodoAdderForm({ onAddTodo }) {
    const [todoText, setTodoText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo(todoText);
        setTodoText("");
    };

    const handleChange = (event) => {
        setTodoText(event.target.value)
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={todoText} onChange={handleChange}/>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoAdderForm;
