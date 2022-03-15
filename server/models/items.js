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
    size: {
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