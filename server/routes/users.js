const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/users");
const auth = require("../config/auth");
/**
 * @route post /user/signup
 * @desci signup the user
 * @access Public
 */
router.post("/signup", async(req, res) => {
    const { username, password, phone } = req.body;
    try {
        if (!username || !password || !phone) {
            res.status(400).res.json({ message: "請輸入帳號密碼及手機號碼" });
        }
        let newUser = new User({
            username: username,
            password: password,
            phone: phone,
        });
        // 為該成功註冊之用戶產生 JWT
        const token = await newUser.generateAuthToken();
        // 回傳該用戶資訊及 JWT
        res.status(201).send({ success: true, message: "註冊成功", token });
    } catch (err) {
        res.status(400).json({ message: "此帳號已經有人使用" });
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
            res.status(401).json({ status: false, message: err });
        }
        res.status(404).json({ status: false, message: err });
    }
});
/**
 * @route get /user/updata
 * @desci send user
 * @access Public
 */
router.get("/update", auth);
/**
 * @route post /user/updata
 * @desci update user
 * @access Public
 */
router.post("/update", (req, res) => {
    const { username, oldPassword, newPassword, phone } = req.body;
    User.findOneAndUpdate({ username: username }, { $set: { password: newPassword, phone: phone } },
        async function(err, user) {
            const compare = await bcrypt.compare(oldPassword, user.password);
            if (!compare) {
                res.status(400).json({ message: "密碼不正確" });
            } else {
                res.status(200).json({ message: "更改成功" });
            }
        }
    );
});
module.exports = router;