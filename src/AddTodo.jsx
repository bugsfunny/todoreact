import { useContext, useState } from "react";
import { TodoDispatchContext } from "./TodoContext";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useContext(TodoDispatchContext);

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
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
