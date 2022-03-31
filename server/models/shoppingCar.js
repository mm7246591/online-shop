const mongoose = require("mongoose");
let ShoppingCarSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    favorites: [{}],
    createAt: {
        type: Date,
        default: Date.now(),
    },
    token: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
});
ShoppingCarSchema.set("collection", "shoppingCar");
let ShoppingCar = mongoose.model("shoppingCar", ShoppingCarSchema);
module.exports = ShoppingCar;