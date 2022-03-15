const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/users");
router.post(
    "/signup", [
        body("username").trim().isAlphanumeric().withMessage("帳號格式錯誤"),
        body("password")
        .trim()
        .isLength({ min: 3 }, { max: 5 })
        .withMessage("密碼格式錯誤"),
        body("phone").trim().isMobilePhone().withMessage("手機格式錯誤"),
    ],
    function(req, res) {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            const [{ msg }] = err.errors;
            return res.status(422).send(msg);
        } else {
            const { username, password, phone } = req.body;
            let member = new User({
                username: username,
                password: password,
                phone: phone,
            });
            member.save(function(err) {
                if (err) {
                    return res.status(500).send(err);
                }
                console.log("儲存成功");
            });
            // Member.find({}, function(err, member) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     console.log(member);
            // });
        }
    }
);
module.exports = router;