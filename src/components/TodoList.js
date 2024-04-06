import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onEditTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    index = {index}
                    todo={todo} 
                    onEdit={onEditTodo}
                    onDelete={() => onDeleteTodo(index)}
                />
            ))}
        </ul>
    );
};

export default TodoList;