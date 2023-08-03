const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },

    replies: [ // Array of Objects
      {
        type: Schema.Types.ObjectId,
        ref: 'Reply',
      },
    ],

    author: {
      type: String,
    },

    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Comment', commentSchema);
