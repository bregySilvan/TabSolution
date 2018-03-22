
import * as express from 'express';
import * as fs from 'fs-extra';
import * as config from '../../config';
import { IBoard, IBoardInfo } from '../../interfaces';

var dataFile = 'var/daten.json';
var app = express();
var defaultPort = config.defaultPort;

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
    fs.readFile(dataFile, 'utf8', function (err, data) {
        res.end(data);
    });
});

app.get('/title/:id', function (req, res) {
    var ID = req.query.id;
    ID = "ID" + ID;
    fs.readFile(dataFile, 'utf8', function (err, data) {
        var daten = JSON.parse(data);
        console.log(daten);
        var obj;
        try {
            obj = {
                title: daten[ID].title,
            };
            var titleString = JSON.stringify(obj);
            res.end(titleString);
        }
        catch (err) {
            res.end('ERROR: Titel nicht vorhanden :(');
        }
    });
});

app.get('/board/:id', function (req, res) {
    var ID = req.query.id;
    ID = "ID" + ID;
    fs.readFile(dataFile, 'utf8', function (err, data) {
        var daten = JSON.parse(data);
        var board: IBoard;
        try {
            board = {
                title: daten[ID].title,
                description: daten[ID].description,
                imageURL: daten[ID].imageURL
            };
            var dataString = JSON.stringify(board);
            res.end(dataString);
        }
        catch (err) {
            res.end('ERROR: board nicht vorhanden :(');
        }
        
    });
});

app.get('/boardlist', function (req, res) {
    fs.readFile(dataFile, 'utf8', function (err, data) {
        var daten = JSON.parse(data);
        var ids = Object.keys(daten);
        var boardInfos: IBoardInfo[] = [];
        ids.forEach((id) => {
            var boardInfo: IBoardInfo = {
                id: id.substring(2),
                title: daten[id]
            };
            boardInfos.push(boardInfo);
        });
        res.end(JSON.stringify(boardInfos));
    });
});

var server = app.listen(defaultPort, function () {
    var port = server.address().port;
    console.log(`Runnint express on port: ${port}`);
});

app.post('/board/:id', function (req, res, next) 
{
    var IDFromSubmit = req.query.id;
    var titleFromSubmit = req.query.title;
    var descriptionFromSubmit = req.query.description;
    var imageURLFromSubmit = req.query.imageURL;
    save(IDFromSubmit, titleFromSubmit, descriptionFromSubmit, imageURLFromSubmit)

});
