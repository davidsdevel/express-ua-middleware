const express = require("express");
const server = express();
const userAgent = require("../index");

server.use(userAgent);

server.get("/", (req, res) => {
	res.json(req.userAgent);
}).listen(8081, () => console.log("Listen"));