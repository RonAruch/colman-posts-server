const express = require("express");
const commentsController = require("../controllers/comments_controller");

const router = express.Router();

router.post("/", commentsController.createComment);

router.put("/:id", commentsController.updateComment);

module.exports = router;
