var http = require("http");
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello you there');
});


var server = app.listen(process.env.port, function() {
    console.log('Listening on port %d', server.address().port);
});
 
console.log("Server started.");
