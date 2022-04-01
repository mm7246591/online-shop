const express = require("express");
const router = express.Router();
const Items = require("../models/items");
const ShoppingCar = require("../models/shoppingCar");
/**
 * @route get /items
 * @desci send items
 * @access Public
 */
router.get("/items", function(req, res) {
    Items.find({}, function(err, items) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({
                items: items,
            });
        }
    });
});
/**
 * @route post /:name
 * @desci get shoppingCar
 * @access Public
 */
router.post("/home/:name", function(req, res) {
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
        let favoirte = await new ShoppingCar({
            username: username,
            name: name,
            price: items.price,
            size: size,
            num: num,
            img: items.img,
            token: token,
        });
        await favoirte.save();
        ShoppingCar.find({ token: token }, async function(err, shoppingCar) {
            if (err) {
                console.log(err);
            } else {
                await res.status(200).json({
                    shoppingNum: shoppingCar.length,
                    message: "加入成功",
                });
            }
        });
    });
});
/**
 * @route get /favorite
 * @desci send shoppingCar
 * @access Public
 */
router.get("/favorite", function(req, res) {
    const token = req.header("Authorization");
    ShoppingCar.find({ token: token }, function(err, shoppingCar) {
        res.status(200).json({
            shoppingCar: shoppingCar,
        });
    });
});
/**
 * @route post /favorite
 * @desci delete shoppingCar
 * @access Public
 */
router.post("/favorite", function(req, res) {
    const { id } = req.body;
    ShoppingCar.findOneAndDelete({ id: id }, function(err, ShoppingCar) {
        res.status(200).json({
            message: "刪除成功",
        });
    });
});
module.exports = router;