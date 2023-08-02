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
    let threadID = req.params.id;
    res.render('pages/threads/:id');
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



module.exports = {
  threadsPage,
  threadsNew
}