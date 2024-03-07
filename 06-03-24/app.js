require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

const app = express();

const PORT = process.env.PORT;

app.set("view engine", "hbs");

app.use("/api/products", require("./routes/api/products"));
app.use("/", require("./routes/pages/pages"));

app.listen(PORT, () => {
  console.log(`In ascolto sulla porta ${PORT}`);
});
