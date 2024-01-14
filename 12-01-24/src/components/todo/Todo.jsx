import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Todo = ({ todoItem, setTodosData }) => {
  const { id, todo, completed } = todoItem;

  const [checked, setChecked] = useState(completed);
  const [todoText, setTodoText] = useState("");
  const [isEditable, setEditable] = useState(false);

  useEffect(() => {
    setTodoText(todo);
  }, [todo]);

  const onHandleCheck = () => setChecked(!checked);
  const onHandleEditable = () => setEditable(!isEditable);

  const onHandleTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const onHandleDelete = () => {
    const isSure = confirm(
      `Sei sicuro di voler eliminare la todo "${todoText}"?`
    );
    if (!isSure) return;

    setTodosData((prev) => prev.filter((todoEl) => todoEl.id !== id));
  };

  return (
    <div className={styles.Todo}>
      <div className={styles.TodoText}>
        <input
          className={styles.TodoCheck}
          type="checkbox"
          checked={checked}
          onChange={onHandleCheck}
        />
        {!isEditable ? (
          <p
            className={checked ? styles.TextChecked : ""}
            onClick={onHandleEditable}
          >
            {todoText}
          </p>
        ) : (
          <input
            type="text"
            value={todoText}
            onBlur={onHandleEditable}
            onChange={onHandleTextChange}
            className={styles.ChangeTodo}
          />
        )}
      </div>
      <p className={styles.TodoDelete} onClick={onHandleDelete}>
        x
      </p>
    </div>
  );
};

export default Todo;
