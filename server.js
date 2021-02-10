// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {status:false},
    {status:false},
    {status:false},
    {status:false},
    {status:false}
]

ß

app.get('/', function(req, res){
    res.sendFile(path.join(_dirname,''))
})

app.get('/make', function(req, res){
    res.sendFile(path.join(_dirname,''))
})

app.get('/tables', function(req, res){
    res.sendFile(path.join(_dirname,''))
})

app.post('/sendres', function(req, res){
    
})

app.get('/getinfo', function(req, res){
    var response = {
        tablesAvailable:'',
        listOfAvailale: [],
        tableStatus: tables,
    }
    res.json(response)
})