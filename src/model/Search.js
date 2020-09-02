const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = Schema({
  timestamp: Number,
  palabras: [String],
  anyos: [String],
  meses: [String],
  redes: [String],
  ignorar: String
});

module.exports = mongoose.model('searchs', SearchSchema);
