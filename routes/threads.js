var express = require('express');
var router = express.Router();
const threadsCtrl = require('../controllers/threads');


router.get('/threads', threadsCtrl.threadsPage)
router.get('/threads/threads-new', threadsCtrl.threadsNew)
router.get('/threads/:id', threadsCtrl.threadsShow)
router.post('/threads', threadsCtrl.createThread)


module.exports = router;