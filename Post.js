const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title:   String,
  body:    String,
  author:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date:    { type: Date, default: Date.now },
  tags:    [String]
});

module.exports = mongoose.model('Post', postSchema);