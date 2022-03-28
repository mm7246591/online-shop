const express = require("express");
const session = require("express-session");
const itemRouter = require("./routes/items");
const userRouter = require("./routes/users");
const shoppingCarRouter = require("./routes/shoppingCar");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const path = require("path");
const app = express();
require("dotenv").config();

// connet dataBase
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
let dataBase = mongoose.connection;
dataBase.once("open", function() {
    console.log("連接成功");
});
dataBase.on("err", function(err) {
    console.log(err);
});
// session
app.use(
    session({
        secret: process.env.JWT_SECRET,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        resave: "false",
        saveUninitialized: "false",
    })
);
// setup the static directory
app.use(express.static(path.join(__dirname, "public")));
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
app.use("/", shoppingCarRouter);
app.use("/user", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server started on port 3000");
});