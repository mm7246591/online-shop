const express = require("express");
const router = express.Router();
const Items = require("../models/items");
const ShoppingCar = require("../models/shoppingCar");
/**
 * @route get items
 * @access Public
 */
router.get("/items", function(req, res) {
    Items.find({}, function(err, items) {
        if (err) {
            console.log(err);
        } else {
            res.send({
                items: items,
            });
        }
    });
});
router.post("/:name", function(req, res) {
    const { username, token, name, size, num } = req.body;
    Items.findOne({ name: name }, async function(err, items) {
        // if (size === "S" && items.S !== "0") {
        //     const sum = items.S - num;
        //     Items.updateOne({ name: name }, { $set: { S: sum } },
        //         function(err, items) {}
        //     );
        // } else if (size === "M" && items.M !== "0") {
        //     const sum = items.M - num;
        //     Items.updateOne({ name: name }, { $set: { M: sum } },
        //         function(err, items) {}
        //     );
        // } else if (size === "L" && items.L !== "0") {
        //     const sum = items.L - num;
        //     Items.updateOne({ name: name }, { $set: { L: sum } },
        //         function(err, items) {}
        //     );
        // } else if (size === "XL" && items.XL !== "0") {
        //     const sum = items.XL - num;
        //     Items.updateOne({ name: name }, { $set: { XL: sum } },
        //         function(err, items) {}
        //     );
        // }
        try {
            let favoirte = await new ShoppingCar({
                username: username,
                favorites: [
                    { name: name },
                    { price: items.price },
                    { size: size },
                    { num: num },
                    { img: items.img },
                ],
                token: token,
            });
            favoirte.save();
            res.status(200).json({
                message: "加入成功",
            });
        } catch (err) {
            res.status(401).json({ message: err });
        }
    });
});
//
module.exports = router;