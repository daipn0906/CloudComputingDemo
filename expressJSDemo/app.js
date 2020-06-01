var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('<html><body><h1>Hello</h1></body></html>');
})
app.get('/test', function(req, res){
    res.sendFile(__dirname + '/test.html');
    res.send('<html><body><h1>Hello 2</h1></body></html>');
})
var server = app.listen(5000, function(){
    console.log("haha");
});