const User = require('../models/User');
const Thread = require('../models/Thread');


async function profilePage(req, res) {
  try {
    const threads = await Thread.find({ authorId: req.query.id })
    res.render('pages/profile', { threads });
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = {
  profilePage,
}