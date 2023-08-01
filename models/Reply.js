const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  content: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Reply', replySchema);