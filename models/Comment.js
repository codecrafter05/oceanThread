const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },

    thread: {
        type: Schema.Types.ObjectId,
        ref: 'Tread',
    },

    avatar: {
      type: String,
    },

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
