import { useState } from "react";
import "./index.scss";

const Todo = ({ todoItem }) => {
  const { todo, completed } = todoItem;
  const [checked, setChecked] = useState(completed);

  return (
    <div className="Todo">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        name=""
        id=""
      />
      <p className={checked ? "checked" : ""}>{todo}</p>
    </div>
  );
};

export default Todo;
