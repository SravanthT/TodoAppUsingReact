import React, { useState, useEffect, useRef } from "react";
import { Button, Input } from "semantic-ui-react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <Input
          className="input-ele"
          type="text"
          placeholder="Add a Todo"
          onChange={handleChange}
          ref={inputRef}
          value={input}
        />

        {props.newor ? (
          <Button content="Update" secondary />
        ) : (
          <Button content="Add TODO" primary />
        )}
      </form>
    </div>
  );
}

export default TodoForm;
