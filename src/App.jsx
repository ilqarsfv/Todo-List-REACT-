import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };
  const updateTodo = (newTodo) => {
    todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return;
      } else {
        todo.content = newTodo.content;
      }
    });
  };
  return (
    <>
      <div className="todoWrapper">
        <h1>Todo List App</h1>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          todoList={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}

export default App;
