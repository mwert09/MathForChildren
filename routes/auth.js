const express = require("express");
const router = express.Router();

// @route       Get api/auth
// @desc        Get logged in user
// @access      Private

router.get("/", function(req, res){
    res.send("Get logged in user");
});

// @route       Post api/auth
// @desc        Auth user and get token
// @access      Public

router.post("/", function(req, res){
    res.send("Get logged in user");
});

module.exports = router;