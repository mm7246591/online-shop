const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const passport = require("passport");
const User = require("../models/users");
require("dotenv").config();

/**
 * @route post /user/signup
 * @desci signup the user
 * @access Public
 */
router.post("/signup", (req, res) => {
    const { username, password, phone } = req.body;
    // check username
    User.findOne({
        username: username,
    }).then((user) => {
        if (user) {
            return res.status(400).json({ message: "此帳號已經有人使用" });
        }
    });
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
                    throw err;
                }
                console.log(user);
                return res.status(201).json({ success: true, message: "註冊成功" });
            });
        });
    });
});
/**
 * @route post /user/signIn
 * @desci signIn the user
 * @access Public
 */
router.post("/signin", (req, res) => {
    // check user
    User.findOne({ username: req.body.username }).then((user) => {
        if (!user) {
            return res.status(404).json({ status: false, message: "找不到此用戶" });
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

                const token = jwt.sign(payload, process.env.session_secret, {
                    expiresIn: 604800,
                });
                res.status(200).json({
                    status: true,
                    token: `Bearer ${token}`,
                    user: payload,
                });
            } else {
                return res.status(404).json({ status: false, message: "密碼錯誤" });
            }
        });
    });
});
module.exports = router;