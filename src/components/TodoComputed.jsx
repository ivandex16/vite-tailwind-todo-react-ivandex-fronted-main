import React from "react";

const TodoComputed = ({ computedItemLeft, clearComplete }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400 dark:text-gray-400 duration-1000">
                {computedItemLeft} item left
            </span>
            <button
                className="text-gray-400 dark:text-gray-400 transition-all duration-1000"
                onClick={clearComplete}
            >
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
