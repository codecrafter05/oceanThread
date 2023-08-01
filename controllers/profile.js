const User = require('../models/User');



async function profilePage(req, res) {
  try {
    res.render('pages/profile');
  }
  catch (err) {
    console.log(err)
  }
};

module.exports = {
  profilePage,
}