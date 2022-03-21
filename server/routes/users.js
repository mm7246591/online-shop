const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
require("dotenv").config();

/**
 * @route post /user/signup
 * @desci signup the user
 * @access Public
 */
router.post("/signup", (req, res) => {
    const { username, password, phone } = req.body;
    console.log(req.body);
    if (!username || !password || !phone) {
        res.json({ msg: "請輸入帳號密碼及手機號碼" });
    } else {
        // check phone
        // User.findOne({
        //     phone: phone,
        // }).then((user) => {
        //     if (user) {
        //         return res.status(400).json({ message: "此手機號碼已經有人使用" });
        //     }
        // });
        let newUser = new User({
            username: username,
            password: password,
            phone: phone,
        });
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newUser.password, salt, function(err, hash) {
                if (err) {
                    throw err;
                }
                newUser.password = hash;
                newUser.save((err, user) => {
                    if (err) {
                        return res.status(400).json({ message: "此帳號已經有人使用" });
                    }
                    return res.status(201).json({ success: true, message: "註冊成功" });
                });
            });
        });
    }
    // check username
});
/**
 * @route post /user/signIn
 * @desci signIn the user
 * @access Public
 */
router.post("/signin", (req, res) => {
    console.log(req.body);
    // check user
    User.findOne({ username: req.body.username }).then((user) => {
        if (!user) {
            return res.status(401).json({ status: false, message: "找不到此用戶" });
        }
        // check if there is user then compare the password
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
            // if find we need to send JSON Token
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    username: user.username,
                    password: user.password,
                    phone: user.phone,
                };

                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN,
                });
                res.status(200).json({
                    username: user.username,
                    status: true,
                    token: token,
                });
            } else {
                return res.status(404).json({ status: false, message: "密碼錯誤" });
            }
        });
    });
});
module.exports = router;