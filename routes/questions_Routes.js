const express = require("express");
const router = express.Router();

const {
  createQuestions,
  getQuestions,
} = require("../controllers/questions_Controller");

router.get("/questions", getQuestions);
router.post("/questions", createQuestions);

module.exports = router
