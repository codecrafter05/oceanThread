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

  cohort: {
    type: String,
    enum: ['SEI', 'DAI', 'UI/UX', 'General'],
    required: true
  },

  threadType: {
    type: String,
    enum: ['Issues', 'Suggestions', 'Project Sharing', 'Feedback', 'General'],
    required: true
  },

  threadStatus: {
    type: String,
    enum: ['Completed', 'Incomplete', 'General'],
  },

  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },

  briefDescription: {
    type: String,
    required: true
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

}, {
  timestamps: true,
});

module.exports = mongoose.model('Thread', threadSchema);