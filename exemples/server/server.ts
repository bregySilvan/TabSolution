/*var express = require('express');
var fs = require("fs");

var app = express();

app.get('/data', function (req, res) {
    fs.readFile( __dirname + "/" + "daten.json", 'utf8', function (err, data) {
        res.end( data );
    });
})

app.get('/title/:id', function (req, res) {
    let ID:string = req.params.id;
    ID = "ID" + ID;
    fs.readFile( __dirname + "/" + "daten.json", 'utf8', function (err, data) {
        let daten = JSON.parse( data );
        let title:string;

        try {
            title = daten[ID].title;
        }
        catch(err) {
            title = "ERROR ID ist nicht vorhanden :("
        }

        res.end( '{"' + title + '"}' );
    });
})

app.get('/board/:id', function (req, res) {
    let ID:string = req.params.id;
    let IDNew = "ID" + ID;
    fs.readFile( __dirname + "/" + "daten.json", 'utf8', function (err, data) {
        let daten = JSON.parse( data );
        let obj;

        try {
            obj = {
                id: ID,
                title: daten[IDNew].title,
                anzahlFolgen: daten[IDNew].anzahlFolgen, 
                rating: daten[IDNew].rating
            }
        }
        catch(err) {
            obj = "ERROR ID ist nicht vorhanden :("
        }
        
        let dataString:string = JSON.stringify(obj);

        res.end(dataString);
    });
})


var server = app.listen(8888, function () {
    let port = server.address().port
    console.log("Runnint express at: " + port)
})
*/