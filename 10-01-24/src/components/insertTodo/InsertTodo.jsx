import { useState } from "react";
import "./index.scss";

const InsertTodo = ({ setTodosData }) => {
  const [newTodoInput, setNewTodoInput] = useState("");

  const onNewTodoInputChange = (e) => {
    setNewTodoInput(e.target.value);
  };

  const onAddTodo = () => {
    if (newTodoInput == "") return;

    setTodosData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        todo: newTodoInput,
        completed: false,
        userId: 0,
      },
    ]);

    setNewTodoInput("");
  };

  return (
    <div className="InsertTodo">
      <div className="Wrapper">
        <input
          type="text"
          onChange={onNewTodoInputChange}
          value={newTodoInput}
          placeholder="New todo"
        />
        <button onClick={onAddTodo}>+</button>
      </div>
    </div>
  );
};

export default InsertTodo;
