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

router.post("/member/signup", function(req, res) {
    console.log(req.body);
    res.redirect("/");
});
module.exports = router;