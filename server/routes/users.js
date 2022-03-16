const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/users");
router.post(
    "/user/signup", [
        body("username").trim().isAlphanumeric().withMessage("帳號格式錯誤"),
        body("password")
        .trim()
        .isLength({ min: 1 }, { max: 5 })
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
            let newUser = new User({
                username: username,
                password: password,
                phone: phone,
            });
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    if (err) {
                        console.log(err);
                    }
                    newUser.password = hash;
                    newUser.save(function(err) {
                        if (err) {
                            console.log(err);
                        }
                        console.log("儲存成功");
                    });
                });
            });

            // User.find({}, function(err, user) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     console.log(user);
            // });
        }
    }
);
module.exports = router;