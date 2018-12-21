const express = require("express");
const router = express.Router();

//@route GET api/posts/test
//@desc Testing posts route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Post connection success" }));

module.exports = router;
