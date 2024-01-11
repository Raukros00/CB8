import "./index.scss";
import Todo from "../todo/";
import InsertTodo from "../insertTodo";

const TodoList = ({ todosData, setTodosData }) => {
  return (
    <div className="TodoList">
      <div className="Wrapper">
        <InsertTodo setTodosData={setTodosData} />
        <div className="List">
          {todosData.map((todo, key) => (
            <Todo key={key} todoItem={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
