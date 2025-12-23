const express = require("express");
const env = require("dotenv");
const app = express();
env.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ messeage: "Server is up" });
});

app.get("/login", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (username === process.env.USER_NAME && password === process.env.PASSWORD) {
    res.json({ message: "Login Successful" });
  } else {
    res.json({ message: "Login failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
