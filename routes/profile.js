var express = require("express");
var router = express.Router();
const profileCtrl = require("../controllers/profile");

router.get("/profile", profileCtrl.profilePage);
router.get("/profile/threads-update", profileCtrl.threadsUpdateShow);
router.post("/profile/updateThread", profileCtrl.threadsUpdate);
router.delete("/profile/:id/deleteThread", profileCtrl.threadsDelete);

module.exports = router;
