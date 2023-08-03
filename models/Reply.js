const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema(
  {
    content: {
      type: String,
      required: true,
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

module.exports = mongoose.model('Reply', replySchema);
