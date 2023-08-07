const Thread = require("../models/Thread");
const User = require("../models/User");

async function leaderPage(req, res) {
  try {
    const users = await User.find().sort({ threadsCreated: -1 });
    const currentUser = await User.findById(req.params.id);
    res.render("pages/leaderboards", { users, currentUser });
  } catch (err) {
    res.redirect("/error");
    console.log(err);
  }
}

module.exports = {
  leaderPage,
};
