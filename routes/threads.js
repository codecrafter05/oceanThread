var express = require('express');
var router = express.Router();
const threadsCtrl = require('../controllers/threads');

router.get('/threads', threadsCtrl.threadsPage);
router.get('/threads/thread-view', threadsCtrl.threadsShow);
router.get('/threads/threads-new', threadsCtrl.threadsNew);
router.post('/threads/:id', threadsCtrl.createThread);
router.post('/thread-view', threadsCtrl.createComment);
router.post('/thread-view', threadsCtrl.createReply);

module.exports = router;
