import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Header from "./components/Header";

// const initialState = [
//     { id: 1, title: "Learn React", completed: false },
//     {
//         id: 2,
//         title: "Learn Vite",
//         completed: true,
//     },
//     {
//         id: 3,
//         title: "Build a todo app with hooks and context api ",
//         completed: false,
//     },
//     {
//         id: 4,
//         title: "Learn Typescript",
//         completed: false,
//     },
//     {
//         id: 5,
//         title: "Learn Nextjs",
//         completed: true,
//     },
// ];

const initialState = JSON.parse(localStorage.getItem('TODOS')) || []


function App() {
    const [todos, setTodos] = useState(initialState);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
      localStorage.setItem('TODOS', JSON.stringify(todos))
    },[todos])

    const createTodo = (title) => {
        const newTodo = {
            id: Math.floor(Math.random() * 90 + 5),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemLeft = todos.filter((todo) => !todo.completed).length;

    const clearComplete = () => {
        setTodos(todos.filter((item) => !item.completed));
    };

    const changeFilter = (filter) => setFilter(filter);

    const filterTodo = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => {
                    return !todo.completed;
                });
            case "completed":
                return todos.filter((todo) => {
                    return todo.completed;
                });

            default:
                return todos;
        }
    };

    return (
        <div
            className="min-h-screen transition-all duration-1000  bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')]
    bg-contain bg-no-repeat dark:bg-gray-900  dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
        >
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filterTodo()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed
                    computedItemLeft={computedItemLeft}
                    clearComplete={clearComplete}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center dark:text-gray-400 transition-all duration-1000 ">
                Drag and drop to reorder list
            </footer>
        </div>
    );
}

export default App;
