const express = require("express");
const router = express.Router();

router.get("/item", function(req, res) {
    res.send(req.query);
});

router.post("/favorite", function(req, res) {
    res.send(req.body);
});
module.exports = router;