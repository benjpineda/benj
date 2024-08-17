const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/', function (req, res){
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post('/process_post', urlencodedParser, function (req,res){
    response = {
        first_name:req.query.first_name,
        last_name:req.query.lastname
    };
})

app.get('/process_get', function (req, res){
    response = {
        first_name:req.query.first_name,
        last_name:req.query.lastname
    };

console.log(response);
res.end(JSON.stringify(response));
});