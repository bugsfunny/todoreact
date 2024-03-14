import "./App.css";
import Todos from "./Todos";

import { useReducer } from "react";
import AddTodo from "./AddTodo";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const addTodo = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };

  function updateTodo(todo) {
    dispatch({
      type: "updated",
      todo: todo,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "deleted",
      id,
    });
  }

  return (
    <>
      <h1>TODO APP</h1>
      <AddTodo onAddTodo={addTodo} />
      <Todos
        todos={todos}
        onUpdateTodo={updateTodo}
        onDeleteTodo={deleteTodo}
      />
    </>
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
        if (t.id === action.task.id) {
          return action.task;
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

let nextId = 3;
const initialTodos = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export default App;
