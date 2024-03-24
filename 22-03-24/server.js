require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("./middleware/auth");
const User = require("./models/user");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);

app.use(express.json());
app.use("/api", auth, require("./routes/api"));

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Db connesso!"));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === null || password === null) {
    const response = {
      status: "ERROR",
      message: "I dati di login sono assenti",
    };
    return res.status(401).json(response);
  }
  const user = await User.findOne({
    username: req.body.username,
  });

  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.status(200).json({ accessToken });
    }
  } catch (error) {
    const response = {
      status: "ERROR",
      message: error,
    };

    res.status(401).json(response);
  }
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      password: hashedPassword,
    });

    const newUser = await user.save();

    const response = {
      status: "OK",
      user: newUser,
    };

    res.status(201).json(response);
  } catch (error) {
    const response = {
      status: "ERROR",
      message: "Errore interno al server",
    };

    res.status(500).json(response);
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
