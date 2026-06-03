const express = require("express");
const router = express.Router();
const passwordController = require("./controllers/passwordController");

router.get("/", passwordController.index);
router.get("/create", passwordController.create);
router.post("/store", passwordController.store);
router.get("/edit/:id", passwordController.edit);
router.post("/update/:id", passwordController.update);
router.get("/delete/:id", passwordController.delete);

module.exports = router;
