const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const passport = require("passport");
var errors = [];
var success = null;
router.get("/user/signup", function(req, res) {
    res.send(errors, success);
    errors.splice(0, errors.length);
});
router.post(
    "/user/signup", [
        body("username").trim().isAlphanumeric().withMessage("帳號格式不正確"),
        body("password")
        .trim()
        .isLength({ min: 1, max: 5 })
        .withMessage("密碼格式不正確"),
        body("phone").trim().isMobilePhone().withMessage("手機號碼格式不正確"),
    ],
    function(req, res) {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            for (let i of err.errors) {
                errors.push(i.msg);
            }
            return res.status(422);
        } else {
            passport.authenticate("/user/signup", function() {
                success = true;
            });
        }
    }
);
module.exports = router;