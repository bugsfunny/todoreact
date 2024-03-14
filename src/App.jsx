import "./App.css";
import Todos from "./Todos";

import { useReducer } from "react";
import AddTodo from "./AddTodo";
import { TodoContext, TodoDispatchContext } from "./TodoContext";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        <h1>TODO APP</h1>
        <AddTodo />
        <Todos />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

function todosReducer(todos, action) {
  switch (action.type) {
    case "added": {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialTodos = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export default App;
