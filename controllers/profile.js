const User = require("../models/User");
const Thread = require("../models/Thread");

async function profilePage(req, res) {
  try {
    const users = await User.findById(req.query.id);
    const threads = await Thread.find({ authorId: req.query.id });
    res.render("pages/profile", { threads, users });
  } catch (err) {
    res.redirect("/error");
    console.log(err);
  }
}

async function threadsUpdateShow(req, res) {
  try {
    const thread = await Thread.findById(req.query.id);
    res.render(`pages/threads-update`, { thread });
  } catch (err) {
    res.redirect("/error");
    console.log(err);
  }
}

async function threadsUpdate(req, res) {
  try {
    console.log(req.body);
    await Thread.findByIdAndUpdate(req.query.threadId, req.body);
    res.redirect("/threads");
  } catch (err) {
    res.redirect("/error");
    console.log(err);
  }
}

async function threadsDelete(req, res) {
  try {
    console.log(`id ${req.params.id}`);
    await Thread.findByIdAndDelete(req.params.id);
    res.redirect("/threads");
  } catch (err) {
    res.redirect("/error");
    console.log(err);
  }
}

module.exports = {
  profilePage,
  threadsUpdate,
  threadsUpdateShow,
  threadsDelete,
};
