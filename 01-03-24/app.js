const express = require("express");
const bodyParser = require("body-parser");
const session = require("cookie-session");
const auth = require("./auth");
const hbs = require("hbs");
const { recipes } = require("./data");
const app = express();

const PORT = 3000;

app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "mySecretKey" }));
app.use(auth);

app.get("/", (req, res) => {
  res.render("index", {
    recipes: recipes,
  });
});

app.get("/:cuisine", (req, res) => {
  const cuisine = req.params.cuisine;
  const ricette = recipes.filter((ricetta) => ricetta.cuisine === cuisine);
  res.render("index", {
    recipes: ricette,
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "mario.rossi" || password !== "pass123") {
    return res.render("login", {
      error: "I dati di accesso sono errati!",
    });
  }

  req.session.isAuth = true;
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.isAuth = false;
  res.redirect("/");
});

app.get("/ricetta/:id", (req, res) => {
  const idRicetta = req.params.id;
  const ricetta = recipes.find((ricetta) => ricetta.id === Number(idRicetta));

  res.render("ricetta", {
    ricetta: ricetta,
  });
});

app.listen(PORT, () => {
  console.log(`Il server è in ascolto sulla porta ${PORT}`);
});
