var express = require('express');
var fs = require("fs");

var app = express();

app.get('/data', function (req, res) {
    fs.readFile( __dirname + "/" + "daten.json", 'utf8', function (err, data) {
        res.end( data );
    });
})

app.get('/title', function (req, res) {
    fs.readFile( __dirname + "/" + "daten.json", 'utf8', function (err, data) {
        let daten = JSON.parse( data );
        let title:string = "";
        for (let id in daten) {
            title += daten[id].title + "\n";
        }
        res.end( title );
    });
})

var server = app.listen(8888, function () {
    let port = server.address().port
    console.log("Runnint express at: " + port)
})