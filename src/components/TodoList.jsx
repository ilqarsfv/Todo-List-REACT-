import "../../public/styles/todoList.css";
import PropTypes from "prop-types";
import Todo from "./Todo";
function TodoList({ todoList, removeTodo,updateTodo }) {
  return (
    <div className="todoList">
      {todoList.map((todo) => (
        <Todo key={todo.id} item={todo} removeTodo={removeTodo} newTodoFunc={updateTodo}/>
      ))}
    </div>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};
export default TodoList;
