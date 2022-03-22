const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const User = require("../models/users");
require("dotenv").config();

/**
 * @route post /user/signup
 * @desci signup the user
 * @access Public
 */
router.post("/signup", async(req, res) => {
    const { username, password, phone } = req.body;
    if (!username || !password || !phone) {
        return res.status(400).res.json({ message: "請輸入帳號密碼及手機號碼" });
    } else {
        try {
            let newUser = new User({
                username: username,
                password: password,
                phone: phone,
            });
            // 為該成功註冊之用戶產生 JWT
            const token = await newUser.generateAuthToken();
            // 回傳該用戶資訊及 JWT
            res
                .status(201)
                .send({ success: true, message: "註冊成功", newUser, token });
        } catch (err) {
            res.status(400).json({ message: "此帳號已經有人使用" });
        }
    }
});
/**
 * @route post /user/signIn
 * @desci signIn the user
 * @access Public
 */
router.post("/signin", async(req, res) => {
    const { username, password } = req.body;
    try {
        // 驗證使用者，並將驗證成功回傳的用戶完整資訊存在 user 上
        const user = await User.findByCredentials(username, password);
        console.log(user);
        // 為該成功登入之用戶產生 JWT
        const token = await user.generateAuthToken();
        // 回傳該用戶資訊及 JWT
        res.status(200).json({
            username: user.username,
            status: true,
            token: token,
        });
    } catch (err) {
        if (err === "找不到此用戶") {
            return res.status(401).json({ status: false, message: err });
        }
        res.status(404).json({ status: false, message: err });
    }
});
module.exports = router;