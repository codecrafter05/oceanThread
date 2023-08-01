async function leaderPage(req, res) {
  try {
    res.render('pages/leaderboards');
  }
  catch (err) {
    console.log(err)
  }
};

module.exports = {
  leaderPage,
}