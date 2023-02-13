const express = require("express");
const router = express.Router();

const { createAdmin , loginAdmin} = require("../controllers/adminAuthController");
router.post("/register", createAdmin);
router.post("/login", loginAdmin)
module.exports = router;
