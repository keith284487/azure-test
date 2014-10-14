var http = require("http");
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('FYI');
});

http.createServer(function (req, res) {
res.writeHead(200, {"Content-Type": "text/plain"});
res.end("Hello Node.js and Windows Azure Website!\n");
}).listen(process.env.port);
 
console.log("Server started.");
