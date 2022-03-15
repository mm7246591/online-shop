const express = require("express");
const router = express.Router();
const Items = require("../models/items");

router.get("/items", function(req, res) {
    Items.find({}, function(err, items) {
        if (err) {
            console.log(err);
        } else {
            res.send({
                items: items,
            });
        }
    });
});

module.exports = router;