const Thread = require('../models/Thread');

async function threadsPage(req, res,) {
  try {
    res.render('pages/threads');
  }
  catch (err) {
    console.log(err)
  }
};

async function threadsShow(req, res,) {
  try {
    const thread = await Thread.findById(req.params.id)
    res.render(`pages/thread-view`, { thread });
  }
  catch (err) {
    console.log(err)
  }
};

async function threadsNew(req, res,) {
  try {
    res.render('pages/threads-new');
  }
  catch (err) {
    console.log(err)
  }
};

async function createThread(req, res) {
  try {
    const thread = await Thread.create(req.body);
    res.redirect(`/threads`)
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