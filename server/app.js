const express = require("express");
const session = require("express-session");
const itemRouter = require("./routes/items");
const userRouter = require("./routes/users");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const flash = require("connect-flash");
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
// session
app.use(
    session({
        secret: process.env.session_secret,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        resave: "false",
        saveUninitialized: "false",
    })
);
// PassportMiddleware
app.use(passport.initialize());
app.use(passport.session());
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

// error message
app.use(flash());

// router
app.use("/", itemRouter);
app.use("/", userRouter);
const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server started on port 3000");
});