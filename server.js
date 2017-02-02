var express = require('express');
var app = express();
var results = {}
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

var message = 'Bem vindo ao timestamp. Digite a data após o link. Ex: "/December%2015,%202015" ou "/1450137600000" '


function getTime(query){
    var time = new Date(query);
    var dateNatural = monthNames[time.getMonth()] +" "+ time.getDate() +", "+ time.getFullYear();
    var dateUNIXFinal = time.getTime();
    results.unix = dateUNIXFinal;
    results.natural = dateNatural;
}

app.get('/', function(req, res){
    res.send(message);
})

app.get('/:time', function(req, res){
    var query = req.params.time;
    var queryInt = parseInt(query);
    if (!isNaN(queryInt)) {
        getTime(queryInt);
    }
    else {
        getTime(query);
    }
    res.send(results);
});




app.listen(8080, function(){
    console.log("Listenando da porta 8080");
})