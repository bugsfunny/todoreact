import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

export default function Todos() {
  const todos = useContext(TodoContext);
  return (
    <ul className="vertical">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}
