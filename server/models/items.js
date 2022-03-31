const mongoose = require("mongoose");

let ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    S: {
        type: String,
        required: true,
    },
    M: {
        type: String,
        required: true,
    },
    L: {
        type: String,
        required: true,
    },
    XL: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
});
ItemSchema.set("collection", "items");
let Item = mongoose.model("items", ItemSchema);
module.exports = Item;