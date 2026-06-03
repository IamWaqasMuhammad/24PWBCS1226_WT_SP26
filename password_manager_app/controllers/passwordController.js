const passwordModel = require("../models/passwordModel");

exports.index = (req, res) => {
  res.render("index", {
    passwords: passwordModel.getPasswords(),
  });
};

exports.create = (req, res) => {
  res.render("create");
};

exports.store = (req, res) => {
  passwordModel.addPassword(req.body);
  res.redirect("/");
};

exports.edit = (req, res) => {
  const password = passwordModel.getPasswordById(req.params.id);

  res.render("edit", {
    password,
  });
};

exports.update = (req, res) => {
  passwordModel.updatePasswordById(req.params.id, req.body);

  res.redirect("/");
};

exports.delete = (req, res) => {
  passwordModel.deletePasswordById(req.params.id);
  res.redirect("/");
};
