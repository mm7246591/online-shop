const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        },
    }, ],
    createAt: {
        type: Date,
        default: Date.now(),
    },
}, {
    versionKey: false,
});
UserSchema.pre("save", async function(next) {
    // this 指向目前正被儲存的使用者 document
    const user = this;
    // 確認使用者的 password 欄位是有被變更：初次建立＆修改密碼都算
    if (user.isModified("password")) {
        // 透過 bcrypt 處理密碼，獲得 hashed password
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});
UserSchema.methods.generateAuthToken = async function() {
    // this 指向當前的使用者實例
    const user = this;
    // 產生一組 JWT
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    // 將該 token 存入資料庫中：讓使用者能跨裝置登入及登出
    user.tokens = user.tokens.concat({ token });
    await user.save();
    // 回傳 JWT
    return token;
};
UserSchema.statics.findByCredentials = async(username, password) => {
    // 根據 username 至資料庫找尋該用戶資料
    const user = await User.findOne({ username });
    // 沒找到該用戶時，丟出錯誤訊息
    if (!user) {
        throw "找不到此用戶";
    }
    // 透過 bcrypt 驗證密碼
    const isMatch = await bcrypt.compare(password, user.password);
    // 驗證失敗時，丟出錯誤訊息
    if (!isMatch) {
        throw "密碼錯誤";
    }
    // 驗證成功時，回傳該用戶完整資料
    return user;
};
UserSchema.set("collection", "users");
let User = mongoose.model("users", UserSchema);
module.exports = User;