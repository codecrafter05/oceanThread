var express = require('express');
var router = express.Router();
const profileCtrl = require('../controllers/profile')
const threadsCtrl = require('../controllers/threads');



router.get('/profile', profileCtrl.profilePage)
router.get('/profile/threads-update', profileCtrl.threadsUpdateShow)
router.put('/profile', profileCtrl.threadsUpdate)




module.exports = router;