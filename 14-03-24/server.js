const express = require("express");
const bodyParsers = require("body-parser");
const books = require("./books");
const app = express();

const PORT = 3000;

app.use(bodyParsers.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/books", (req, res) => {
  const response = {
    status: "OK",
    books: books,
    elements: books.length,
  };

  res.status(200).json(response);
});

app.post("/books", (req, res) => {
  const { titolo, genere, autore } = req.body;

  books.push({
    ID: parseInt(Math.random() * Date.now()),
    titolo: titolo,
    genere: genere,
    autore: autore,
  });

  res.redirect("/books");
});

app.get("/add-book", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/add-book.html");
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
