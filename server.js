var http = require("http");
var express = require('express');
var app = express();


http.createServer(function (req, res) {
res.writeHead(200, {"Content-Type": "text/plain"});
res.end("Hello Node.js and Windows Azure Website!\n");
}).listen(process.env.port);

;
 
console.log("Server started.");
