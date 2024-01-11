import { useState, useEffect } from "react";
import Hero from "./components/hero";
import TodoList from "./components/todosList";
import "./App.scss";

function App() {
  const [todosData, setTodosData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodosData(data.todos));
  }, []);

  return (
    <div className="App">
      <Hero todosCounter={todosData.length} />
      <TodoList todosData={todosData} setTodosData={setTodosData} />
    </div>
  );
}

export default App;
