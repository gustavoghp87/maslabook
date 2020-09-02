const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = Schema({
  nombreBoard: String,
  timeBoard: String,
  postBoard: String,
  ip: String,
  city: String,
  country: String,
  latitude: String,
  longitude: String
});

module.exports = mongoose.model('boards', BoardSchema);
