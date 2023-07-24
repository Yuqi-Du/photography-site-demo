// const mongoose = require('mongoose');
const mongoose = require('./database.js')

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  description: {
    type: String,
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['landscape', 'street', 'animal'],
    required: 'This field is required.'
  },
});

photoSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//photoSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Photo', photoSchema);