import styles from "./index.module.scss";
import Todo from "../todo/";
import InsertTodo from "../insertTodo";

const TodoList = ({ todosData, setTodosData }) => {
  const reverseList = [...todosData].reverse();

  return (
    <div className={styles.TodoList}>
      <div className={styles.Wrapper}>
        <InsertTodo setTodosData={setTodosData} />
        <div className={styles.List}>
          {reverseList.map((todo, key) => (
            <Todo key={key} todoItem={todo} setTodosData={setTodosData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
