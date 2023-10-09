import React from "react";
import { IconCross } from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const styles = {
    itemCheck:
        "grid place-items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    itemNoCheck: "inline-block ",
    textoTachado: "line-through",
};

const TodoItems = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4  border-b border-b-gray-400  ">
            {/* <button className="inline-block h-5 w-5 rounded-full border-2 
            first-letter:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <IconCheck/>
            </button> */}

            <button
                className={`  h-5 w-5 flex-none rounded-full border-2 ${
                    completed ? styles.itemCheck : styles.itemNoCheck
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>
            <p
                className={`grow text-gray-600 dark:text-gray-400 ${
                    completed && styles.textoTachado
                }`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItems;
