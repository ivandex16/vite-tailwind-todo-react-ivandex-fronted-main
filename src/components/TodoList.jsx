import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ todos ,removeTodo, updateTodo}) => {
    return (
        <div className="mt-8 rounded-t-md overflow-hidden dark:bg-gray-800 transition-all duration-1000 bg-white [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItems key={todo.id} todo={todo}  removeTodo={removeTodo} updateTodo={updateTodo} />
            ))}
        </div>
    );
};

export default TodoList;
