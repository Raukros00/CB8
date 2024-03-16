const express = require("express");
const todos = require("./todos");
const cors = require("cors");
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => res.status(200).redirect("/"));

app.get("/todos", (req, res, next) => {
  const { order, search } = req.query;

  let responseTodos = [...todos];

  if (search !== undefined) {
    responseTodos = responseTodos.filter((todo) => {
      return (
        String(todo.id).includes(search) ||
        todo.todo.includes(search) ||
        String(todo.completed).includes(search) ||
        String(todo.userId).includes(search)
      );
    });
  }

  if (order === "desc") {
    responseTodos.reverse();
  }

  const response = {
    status: "OK",
    todos: responseTodos,
    total: todos.length,
  };

  res.status(200).json(response);
});

app.post("/todos", (req, res, next) => {
  const { todo } = req.body;

  const newTodo = {
    id: parseInt(Math.random() * Date.now()),
    todo: todo,
    completed: false,
    userId: 0,
  };

  todos.push(newTodo);

  res.status(200).redirect("/todos");
});

app.put("/todos/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const { todo, completed } = req.body;

  const indexTodo = todos.findIndex((todo) => todo.id === id);

  if (indexTodo === -1) {
    const response = {
      status: "ERROR",
      message: `Il todo con id ${id} non è stato trovato`,
    };

    res.status(404).json(response);
  }

  const editedTodo = {
    id: id,
    todo: todo,
    completed: completed,
    userId: 0,
  };

  todos[indexTodo] = editedTodo;
  res.status(200).redirect("/todos");
});

app.delete("/todos/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const indexTodo = todos.findIndex((todo) => todo.id === id);

  if (indexTodo === -1) {
    const response = {
      status: "ERROR",
      message: `Il todo con id ${id} non è stato trovato`,
    };

    res.status(404).json(response);
  }

  todos.splice(indexTodo, 1);
  res.status(200).redirect("/todos");
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
