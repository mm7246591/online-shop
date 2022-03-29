const express = require("express");
const router = express.Router();
const User = require("../models/users");
router.post("/:name", function(req, res) {
    // const { name, size, sum } = req.body;
    // User.updateOne();
});

module.exports = router;