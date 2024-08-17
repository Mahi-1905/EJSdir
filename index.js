const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the "public" directory (if you have any)
app.use(express.static(path.join(__dirname, "public")));

// Route for the homepage
app.get("/", (req, res) => {
  res.render("home");
});

// Simple hello route
app.get("/hello", (req, res) => {
  res.send("Hello");
});

// Route to roll a dice
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { diceVal });
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
