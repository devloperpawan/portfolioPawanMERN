const express = require("express");
const { signup, login } = require("../controllers/adminController");

const router = express.Router();

// Admin signup route
router.post("/admin/signup", signup);

// Admin login route
router.post("/admin/login", login);

module.exports = router;
