
var express = require('express');
var fs = require("fs");
var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/data', function (req, res) {
    fs.readFile(__dirname + "/" + "daten.json", 'utf8', function (err, data) {
        res.end(data);
    });
});
app.get('/title/:id', function (req, res) {
    var ID = req.params.id;
    ID = "ID" + ID;
    fs.readFile(__dirname + "/" + "daten.json", 'utf8', function (err, data) {
        var daten = JSON.parse(data);
        var obj;
        try {
            obj = {
                title: daten[ID].title,
            };
        }
        catch (err) {
            obj = "ERROR ID ist nicht vorhanden :(";
        }
        var titleString = JSON.stringify(obj);
        res.end(titleString);
    });
});
app.get('/board/:id', function (req, res) {
    var ID = req.params.id;
    ID = "ID" + ID;
    fs.readFile(__dirname + "/" + "daten.json", 'utf8', function (err, data) {
        var daten = JSON.parse(data);
        var obj;
        try {
            obj = {
                title: daten[ID].title,
                anzahlFolgen: daten[ID].anzahlFolgen,
                rating: daten[ID].rating
            };
        }
        catch (err) {
            obj = "ERROR ID ist nicht vorhanden :(";
        }
        var dataString = JSON.stringify(obj);
        res.end(dataString);
    });
});
var server = app.listen(8888, function () {
    var port = server.address().port;
    console.log("Runnint express at: " + port);
});

