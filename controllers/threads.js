const Thread = require('../models/Thread');
const User = require('../models/User');


async function threadsPage(req, res,) {
  try {
    const threads = await Thread.find();
    const users = await User.find();
    res.render('pages/threads', { threads, users });
  }
  catch (err) {
    console.log(err)
  }
};

async function threadsShow(req, res,) {
  try {
    const thread = await Thread.findById(req.query.id)
    res.render('pages/thread-view', { thread });
  }
  catch (err) {
    console.log(err)
  }
};

async function threadsNew(req, res,) {
  try {
    const users = await User.find();
    res.render('pages/threads-new', { users });
  }
  catch (err) {
    console.log(err)
  }
};

async function createThread(req, res) {
  try {
    const thread = await Thread.create(req.body);
    res.redirect('/threads', { thread })
    User.threadsCreated += 1;
  }
  catch (err) {
    console.log(err)
    res.render('pages/threads-new');
  }
}

module.exports = {
  threadsPage,
  threadsShow,
  threadsNew,
  createThread,
}
