const express = require("express");
const itemRouter = require("./routes/items");
const userRouter = require("./routes/users");
const cors = require("cors");
const app = express();
require("dotenv").config();

// connet db
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
let db = mongoose.connection;
db.once("open", function() {
    console.log("連接成功");
});
db.on("err", function(err) {
    console.log(err);
});
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use(
    cors({
        origin: ["http://localhost:8080"],
        methods: ["GET", "POST"],
    })
);
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
});
// router
app.use("/", itemRouter);
app.use("/", userRouter);
const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server started on port 3000");
});