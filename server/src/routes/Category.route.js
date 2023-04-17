const express = require("express");
const CategoryController = require("../controller/Category.controller");

const router = express.Router();

router.route("/").get(CategoryController.getCategory);

module.exports = router;
