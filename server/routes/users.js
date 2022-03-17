const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const passport = require("../passport_config");
var errors = [];
// var success = null;
router.get("/user/signup", function(req, res) {
    const error = req.flash("error");

    console.log(error);
    error.splice(0, error.length);
});
router.get("/user", function(req, res) {
    const success = req.flash("success");
    console.log(success);
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
    (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            for (let i of err.errors) {
                errors.push(i.msg);
            }
            return res.status(422);
        }
        passport.authenticate("register", {
            successRedirect: "/user",
            failureRedirect: "/user/signup",
            failurePath: true,
        })(req, res);
    }
);
module.exports = router;