"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.get("/test", function (req, res) {
    res.send("test apitest.......");
});
app.get("/a", function (req, res) {
    res.send("test api234234234.......");
});
app.listen(PORT, function () {
    console.log("running on ".concat(PORT, " ........."));
});
