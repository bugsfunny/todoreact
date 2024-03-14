import PropTypes from "prop-types";
import Todo from "./Todo";

export default function Todos({ todos, onUpdateTodo, onDeleteTodo }) {
  return (
    <ul className="vertical">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onChange={onUpdateTodo}
            onDelete={onDeleteTodo}
          />
        );
      })}
    </ul>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
