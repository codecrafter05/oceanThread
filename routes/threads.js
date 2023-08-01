var express = require('express');
var router = express.Router();
const threadsCtrl = require('../controllers/threads');


router.get('/threads', threadsCtrl.threadsPage)

module.exports = router;