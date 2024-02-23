const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const auth = require("./auth");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

/**
 * Dato che utilizzo il middleware express.static non ho bisogno
 * di fare una richiesta get alla root per farla visualizzare
 * perché la pagina iniziale si chiama index.html.
 */

//Richiesta GET per fare visualizzare il form di login
app.get("/login", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/login.html");
});

//Richiesta POST per processare i dati inseriti nel form
app.post("/mostra-dati", (req, res) => {
  const { username, password } = req.body;

  res.status(200).send(`
    <p>Ciao <strong>${username}</strong> la tua password non più segreta è <strong>${password}</strong></p>
    <a href="/dashboard?username=${username}">Clicca qui solo se sei admin</a>
  `);
});

//Richiesta GET con il middleware "auth" alla pagina dashboard alla quale potrà accedere solo l'utente "admin"
app.get("/dashboard", auth, (req, res) => {
  res.status(200).send("Ciao admin, questa è la dashboard!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
