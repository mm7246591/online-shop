const express = require("express");
const path = require("path");
const router = require("./routes/router");
// connet db

const app = express();

app.use(express.static(path.join(__dirname + "/public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors
const cors = require("cors");
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
app.use("/", router);
app.listen(3000, function() {
    console.log("Server started on port 3000");
});