const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postID:    { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  userID:    { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comment:   String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);