var express = require('express');
var fs = require("fs");

var app = express();

app.get('/data', function (req, res) {
    fs.readFile( __dirname + "/" + "daten.json", 'utf8', function (err, data) {
        res.end( data );
    });
})

app.get('/title/:id', function (req, res) {
    let ID:string = req.params.id;
    let IDNew = "ID" + ID;
    fs.readFile( __dirname + "/" + "daten.json", 'utf8', function (err, data) {
        let daten = JSON.parse( data );
        let title:string;
        let obj;

        try {
            obj = {
                title: daten[IDNew].title,
            }
        }
        catch(err) {
            obj = "ERROR ID ist nicht vorhanden :("
        }
        
        let dataString:string = JSON.stringify(obj);

        res.end(dataString);
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

save("ID4", "Kono Subarashii", "20", "10")

function save(Id, Title, AnzahlFolgen, Rating) {
    fs.readFile( __dirname + "/" + "daten.json", 'utf8', function (err, data) {
        let daten = JSON.parse( data );
        let obj = {
                title: Title,
                anzahlFolgen: AnzahlFolgen,
                rating: Rating
        }

        daten[Id] = obj;
        console.log(daten)
        let dataString:string = JSON.stringify(daten);

        fs.writeFile(__dirname + "/" + "daten.json", dataString, function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        }); 
    });
}


var server = app.listen(8888, function () {
    let port = server.address().port
    console.log("Runnint express at: localhost:" + port)
})