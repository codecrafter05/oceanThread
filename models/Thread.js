const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  cohort: {
    type: String,
    enum: ['SEI', 'DAI', 'UI/UX', 'General'],
    required: true
  },

  threadType: {
    type: String,
    enum: ['Issues', 'Suggestions', 'Project Sharing', 'feedback', 'general'],
    required: true
  },

  threadStatus: {
    type: String,
    enum: ['Completed', 'Incomplete', 'General'],
    required: true,
  },

  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Thread', threadSchema);