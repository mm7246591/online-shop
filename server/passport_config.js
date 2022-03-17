const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("./models/users");
// checkEvent
const registerStrategy = new LocalStrategy({
        usernameField: "username",
        passReqToCallback: true,
    },
    (req, username, password, done) => {
        User.findOne({
                username: username,
            },
            async(err, user) => {
                if (err) {
                    return done(err);
                }
                if (user) {
                    console.log("註冊失敗");
                    return done(null, false, req.flash("error", "此帳號已經有人使用"));
                } else {
                    const { username, password, phone } = req.body;
                    console.log(phone);
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
                            newUser.save((err, user) => {
                                if (err) {
                                    console.log(err);
                                }
                                console.log("註冊成功");
                                return done(null, user, req.flash("success", "註冊成功"));
                            });
                        });
                    });
                }
            }
        );
    }
);
// 驗證策略
passport.serializeUser((user, done) => {
    done(null, user.id);
});
// 序列化與反序列化
passport.deserializeUser(async(id, done) => {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
passport.use("register", registerStrategy);
module.exports = passport;