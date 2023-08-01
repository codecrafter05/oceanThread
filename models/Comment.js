const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },

  replies: [{
    type: Schema.Types.ObjectId,
    ref: 'Reply',
  }],

}, {
  timestamps: true,
});

module.exports = mongoose.model('Comment', commentSchema);