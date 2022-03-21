const mongoose = require("mongoose");
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
    createAt: {
        type: Date,
        default: Date.now(),
    },
}, {
    versionKey: false,
});
UserSchema.set("collection", "users");
let User = mongoose.model("users", UserSchema);
module.exports = User;