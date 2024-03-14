import { useState } from "react";
import PropTypes from "prop-types";

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTodo(text);
        }}
      >
        Add
      </button>
    </>
  );
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
