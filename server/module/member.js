let mongoose = require("mongoose");

let onlineShopSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
}, {
    versionKey: false,
});
onlineShopSchema.set("collection", "member");
let member = mongoose.model("member", onlineShopSchema);
module.exports = member;