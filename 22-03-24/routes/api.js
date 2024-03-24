const express = require("express");
const Todo = require("../models/todos");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  const todos = await Todo.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ _id: -1 });

  const totalTodos = await Todo.countDocuments();
  const totalPages = Math.ceil(totalTodos / limit);

  const previousPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  const responseData = {
    status: "OK",
    todos,
    currentPage: page,
    totalPages,
    limit,
    previousPage,
    nextPage,
  };

  res.status(200).json(responseData);
});

router.get("/:id", async (req, res, next) => {
  const todoID = req.params.id;
  let responseData;

  try {
    const todo = await Todo.findById(todoID);
    responseData = {
      status: "OK",
      data: todo,
    };
  } catch (exception) {
    responseData = {
      status: "ERROR",
      message: `Element with id ${todoID} not found!`,
    };
    return res.status(404).json(responseData);
  }

  res.status(200).json(responseData);
});

router.post("/", async (req, res, next) => {
  const todo = new Todo({
    todo: req.body.todo,
    completed: false,
    user: req.body.user,
  });

  let responseData;

  try {
    const newTodo = todo.save();

    responseData = {
      status: "OK",
      newElement: { newTodo },
    };
  } catch (exception) {
    responseData = {
      status: "ERROR",
      message: "Error with input datas",
    };

    return res.status(500).json(responseData);
  }

  res.status(201).json(responseData);
});

router.delete("/:id", async (req, res, next) => {
  const todoID = req.params.id;
  let responseData = {
    status: "OK",
  };

  try {
    if (todoID.toLowerCase() === "all") {
      await Todo.deleteMany();
      responseData.message = "Tutti i todo sono stati eliminati!";
    } else {
      await Todo.findByIdAndDelete(todoID);
      responseData.message = "Elemento eliminato!";
    }
  } catch (exception) {
    responseData.status = "ERROR";
    responseData.message = "L'elemento non è stato trovato!";
    return res.status(404).json(responseData);
  }

  res.status(200).json(responseData);
});

router.put("/:id", async (req, res, next) => {
  const todoID = req.params.id;

  let responseData = {
    satus: "OK",
  };

  try {
    const todoToEdit = await Todo.findById(todoID);

    if (!todoToEdit) {
      responseData.satus = "ERROR";
      responseData.message = "L'elemento non è stato trovato!";
      return res.status(404).json(responseData);
    }

    const { todo, completed, user } = req.body;
    if (todo && completed && user) {
      todoToEdit.todo = todo;
      todoToEdit.completed = completed;
      todoToEdit.user = user;

      await todoToEdit.save();
      responseData.message = "Elemento modificato!";
      responseData.data = { todoToEdit };
    }
  } catch (exception) {
    responseData.satus = "ERROR";
    responseData.error = exception;
    return res.status(500).json(responseData);
  }

  res.status(200).json(responseData);
});

module.exports = router;
