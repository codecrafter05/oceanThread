const Thread = require('../models/Thread');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Reply = require('../models/Reply');

async function threadsPage(req, res) {
  try {
    const threads = await Thread.find();
    const users = await User.find();
    res.render('pages/threads', { threads, users });
  } catch (err) {
    res.redirect('/error')
    console.log(err);
  }
}

async function threadsShow(req, res) {
  try {
    const thread = await Thread.findById(req.query.id);
    const allComments = await Comment.find();
    res.render('pages/thread-view', { thread, allComments });
  } catch (err) {
    res.redirect('/error')
    console.log(err);
  }
}

async function threadsNew(req, res) {
  try {
    const users = await User.find();
    res.render('pages/threads-new', { users });
  } catch (err) {
    res.redirect('/error')
    console.log(err);
  }
}

async function createThread(req, res) {
  try {
    const thread = await Thread.create(req.body);
    let userId = req.params.id;
    const user = await User.findById(userId)
    // console.log(` `)
    // console.log(`userID ${userId}`)
    // console.log(`user ${JSON.stringify(user)}`)
    // console.log(`user.threadsCreated ${JSON.stringify(user.threadsCreated)}`)
    user.threadsCreated += 1;
    await user.save();
    res.redirect('/threads');
  }
  catch (err) {
    res.redirect('/error')
    console.log(err);
  }
};

async function createComment(req, res) {
  try {
    const comment = await Comment.create(req.body);
    const allComments = await Comment.find();
    const thread = await Thread.findById(req.query.id);
    thread.comments.push(comment._id);
    await thread.save();
    res.render('pages/thread-view', { thread, allComments });
  } catch (err) {
    console.log(err);
  }
}

// async function createReply(req, res) {
//   try {
//     const reply = await Reply.create(req.body);
//     const comment = await Comment.findById(req.query.id);
//     const thread = await Thread.findById(req.query.id);
//     comment.replies.push(reply._id);
//     res.render('pages/thread-view', { thread });
//   } catch (err) {
//     console.log(err);
//   }
// }

module.exports = {
  threadsPage,
  threadsShow,
  threadsNew,
  createThread,
  createComment,
  // createReply,
};
