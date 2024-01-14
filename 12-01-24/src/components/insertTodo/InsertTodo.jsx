import { useState } from "react";
import styles from "./index.module.scss";

const InsertTodo = ({ setTodosData }) => {
  const [newTodoInput, setNewTodoInput] = useState("");

  const onHandleTextTodoChange = (e) => {
    setNewTodoInput(e.target.value);
  };

  const onHandleSubmitTodo = (e) => {
    e.preventDefault();

    if (newTodoInput == "") return;

    const newTodo = {
      id: Math.floor(Math.random() * 999999) * new Date(),
      todo: newTodoInput,
      completed: false,
      userId: 0,
    };

    setTodosData((prev) => [...prev, newTodo]);

    setNewTodoInput("");
  };

  return (
    <form className={styles.InsertTodo} onSubmit={onHandleSubmitTodo}>
      <div className={styles.Wrapper}>
        <input
          type="text"
          onChange={onHandleTextTodoChange}
          value={newTodoInput}
          placeholder="New todo"
          className={styles.TodoInput}
        />
        <button type="submit" className={styles.TodoInsertBtn}>
          +
        </button>
      </div>
    </form>
  );
};

export default InsertTodo;
