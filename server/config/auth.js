const jwt = require("jsonwebtoken");
const User = require("../models/users");
require("dotenv").config();
module.exports = async(req, res) => {
    try {
        // 從來自客戶端請求的 header 取得和擷取 JWT
        const token = req.header("Authorization");
        // 驗證 Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // 找尋符合用戶 id 和 Tokens 中包含此 Token 的使用者資料
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });
        // 若沒找到此用戶，丟出錯誤
        if (!user) {
            throw "找不到此用戶";
        }
        // 將 token 存到 req.token 上供後續使用
        req.token = token;
        // 將用戶完整資料存到 req.user 上供後續使用
        req.user = user;
        res.send({
            user: user,
        });
    } catch (err) {
        console.log(err);
    }
};