let mongoose = require("mongoose");

let onlineShopSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    size: {
        type: String,
    },
    price: {
        type: String,
    },
    img: {
        type: String,
    },
}, {
    versionKey: false,
});
onlineShopSchema.set("collection", "items");
let items = mongoose.model("items", onlineShopSchema);
module.exports = items;