"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/api/contact", function (req, res) {
    res.send([
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" },
    ]);
});
app["delete"]("/api/contact/:id", function (req, res) {
    console.log(req.params.id);
});
app.listen(4000, function () {
    console.log("Server is running");
});
