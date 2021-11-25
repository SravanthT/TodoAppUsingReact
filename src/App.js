import "./styles.css";
import TodoList from "../components/todoList";
import { Advertisement } from "semantic-ui-react";

export default function App() {
  return (
    <div className="App">
      <Advertisement unit="half page">
        <h1>Todo App</h1>
        <TodoList />
      </Advertisement>
    </div>
  );
}
