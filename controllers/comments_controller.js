const CommentModel = require("../models/comments_model");

const createComment = async (req, res) => {
  const commentToCreate = req.body;
  try {
    const comment = await CommentModel.create(commentToCreate);
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateComment = async (req, res) => {
  const commentId = req.params.id;
  const commentNewData = req.body;

  try {
    const result = await CommentModel.updateOne({ _id: commentId }, commentNewData);
    if (result.modifiedCount > 0) res.status(201).send();
    else throw new Error("comment not found");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createComment,
  updateComment,
};
