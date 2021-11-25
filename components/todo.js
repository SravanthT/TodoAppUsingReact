import React, { useState } from "react";

import TodoForm from "../components/todoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Item, Message } from "semantic-ui-react";

function Todo({ todos, completeTodos, removeTodo, updateEdit }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });
  const [newor, setNewor] = useState(false);

  const submitUpdate = (valu) => {
    setNewor(!setNewor);
    updateEdit(edit.id, valu);
    setEdit({
      id: null,
      value: valu
    });
  };

  if (edit.id) {
    return (
      <TodoForm
        edit={edit}
        onSubmit={submitUpdate}
        newor={setNewor ? "Update" : "Add Todo"}
      />
    );
  }

  return todos.map((todo, index) => (
    <Item>
      <Item.Content
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div
          className="addthis"
          key={todo.id}
          onClick={() => completeTodos(todo.id)}
        >
          <Message color="olive">{todo.text}</Message>
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </Item.Content>
    </Item>
  ));
}

export default Todo;
