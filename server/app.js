const express = require("express");
const session = require("express-session");
const itemRouter = require("./routes/items");
const userRouter = require("./routes/users");
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
        origin: process.env.CORS_ROUTER,
        methods: ["GET", "POST"],
    })
);
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.CORS_ROUTER);
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
});

// router
app.use("/", itemRouter);
app.use("/user", userRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    // do not add localhost here if you are deploying it
    console.log("server listening to port " + port);
});