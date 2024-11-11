import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";
function Todo({ item, removeTodo, newTodoFunc }) {
  const [editable, setEditable] = useState(false);
  const [newTodoContent, setNewTodoContent] = useState("");
  const { id, content } = item;

  const delTodo = () => {
    removeTodo(id);
  };

  const editTodo = () => {
    setEditable(true);
    setNewTodoContent(content);
  };

  const updateTodo = () => {
    const newTodo = {
      id: id,
      content: newTodoContent,
    };
    setEditable(false);
    newTodoFunc(newTodo);
  };
  return (
    <div className="listItem">
      {editable ? (
        <input value={newTodoContent} onChange={(e) => setNewTodoContent(e.target.value)}/>
      ) : (
        <div className="text">{content}</div>
      )}

      <div className="todoIconsWrapper">
        {editable ? (
          <FaCheck onClick={updateTodo} />
        ) : (
          <MdEdit onClick={editTodo} />
        )}
        <MdDelete onClick={delTodo} />
      </div>
    </div>
  );
}
Todo.propTypes = {
  item: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  newTodoFunc: PropTypes.func.isRequired,
};
export default Todo;
