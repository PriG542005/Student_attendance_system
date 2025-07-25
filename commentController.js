const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  const comment = new Comment({ ...req.body, userID: req.user.id });
  await comment.save();
  res.status(201).json(comment);
};

exports.getCommentsByPost = async (req, res) => {
  const comments = await Comment.find({ postID: req.params.postID }).populate('userID', 'username');
  res.json(comments);
};