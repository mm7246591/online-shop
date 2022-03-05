const express = require("express");
const router = express.Router();
const items = require("../module/items");
router.get("/items", function(req, res) {
    items.find({}, function(err, items) {
        if (err) {
            console.log(err);
        } else {
            res.send({
                items: items,
            });
        }
    });
});

router.post("/favorite", function(req, res) {
    res.send(req.body);
});
module.exports = router;