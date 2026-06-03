const User = require("../models/User");
let users = []; // In-memory storage for users
exports.signup = (req, res) => {
  const { username, password } = req.body;
  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const newUser = new User(users.length + 1, username, password);
  users.push(newUser);
  res.status(201).json({ message: "User created successfully" });
};
exports.login = (req, res) => {
  const { username, password } = req.body;
  // Check if the username and password match a user in the database
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful" });
};

module.exports = user;
