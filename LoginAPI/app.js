const express = require("express");
const bodyParser = require("body-parser");
const authController = require("./controllers/authController");
const app = express();
app.use(bodyParser.json());
// Routes
app.post("/signup", authController.signup);
app.post("/login", authController.login);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
