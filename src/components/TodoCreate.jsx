import { IoIosAddCircleOutline } from "react-icons/io";
import "../../public/styles/todoCreate.css";
import { useState } from "react";
import PropTypes from "prop-types";
function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const addTodoInp = document.querySelector(".addTodoInp")
  const addTodo = () => {
    if (!newTodo) return;
    addTodoInp.value = ""
    const todos = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    onCreateTodo(todos);
  };

  return (
    <>
      <div className="todoAdd">
        <input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          className="addTodoInp"
          placeholder="Todo əlavə et"
        />
        <IoIosAddCircleOutline onClick={addTodo} className="addIcon" />
      </div>
    </>
  );
}
TodoCreate.propTypes = {
  onCreateTodo: PropTypes.func.isRequired,
};
export default TodoCreate;
