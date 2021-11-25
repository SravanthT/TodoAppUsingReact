import React, { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";
import { Item } from "semantic-ui-react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (rem) => {
    console.log(rem);
    const removeArr = [...todos].filter((todo) => todo.id !== rem);

    setTodos(removeArr);
  };

  const updateEdit = (todoid, newtodo) => {
    if (!newtodo.text || /^\s*$/.test(newtodo.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoid ? newtodo : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <h3>Any plans for today?</h3>
        <Item.Group>
          <TodoForm onSubmit={addTodo} />

          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateEdit={updateEdit}
          />
        </Item.Group>
      </div>
    </>
  );
}

export default TodoList;
