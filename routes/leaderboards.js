var express = require('express');
var router = express.Router();
const leaderboardsCtrl = require('../controllers/leaderboards')


router.get('/leaderboards/:id', leaderboardsCtrl.leaderPage)
router.get('/leaderboards', leaderboardsCtrl.leaderPage)


module.exports = router;