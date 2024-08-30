const express = require("express");
const app = express();
const path = require("path");
const quizController = require("./controller/quizController");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/quiz", quizController.getQuizPage);
app.post("/submit-answer", quizController.submitAnswer);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});