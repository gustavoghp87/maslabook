const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
  innerId: String,
  timest: String,
  date: String,
  postUrl: String,
  socialNet: String,
  user: String,
  post: String,
  shared: String,
  day: String,
  month: String,
  year: String,
  tags: String
});

module.exports = mongoose.model('posts', PostSchema);
