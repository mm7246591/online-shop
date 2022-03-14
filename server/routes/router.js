const express = require("express");
const router = express.Router();
const Items = require("../module/items");
const Member = require("../module/member");
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

router.post("/signup", function(req, res) {
    Member.find({}, function(err, member) {
        if (err) {
            console.log(err);
        }
        console.log(member);
    });
    let member = new Member({
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
    });
    member.save(function(err) {
        if (err) {
            return res.status(500).send(err);
        }
    });
});
module.exports = router;