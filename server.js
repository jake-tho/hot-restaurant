// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const Reservations = require('./resdata')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        tableNo:'1',
        status:false,
        customer:''
    },
    {
        tableNo:'2',
        status:false,
        customer:''
    },
    {
        tableNo:'3',
        status:false,
        customer:''},
    {
        tableNo:'4',
        status:false,
        customer:''
    },
    {
        tableNo:'5',
        status:false,
        customer:''
    }
]
const waitList = []




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
    var newRes = req.body;

    var customer = new Reservations(newRes.name, newRes.phone, newRes.email, newRes.uniqueid)
    console.log(customer)
    res.json('your reservatrion has been placed')



    
    
})

app.get('/getinfo', function(req, res){

    let availableTables = []

    tables.forEach(e => {
        if(e.status == false){
            availableTables.push(e.tableNo)
        }
    })
    var response = {
        tablesAvailable: availableTables.length,
        listOfAvailale: availableTables,
        tableStatus: tables,
        waitList: waitList
    }
    res.json(response)
})
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });