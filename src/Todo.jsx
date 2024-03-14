import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { TodoDispatchContext } from "./TodoContext";

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TodoDispatchContext);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              todo: {
                ...todo,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            todo: {
              ...todo,
              done: e.target.checked,
            },
          });
        }}
      />
      {todoContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: todo.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};
