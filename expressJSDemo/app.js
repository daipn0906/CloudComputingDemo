var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.send('<html><body><h1>Hello</h1></body></html>');
})
app.get('/login', function(req, res){
    res.sendFile(__dirname + '/login.html');
app.post('/doLogin',(req,res)=>{
    let name = req.body.txtName;
    let password = req.body.txtPw;
    if(password=='1234'){
        res.end('Login OK')
    }
    else{
        res.end("fail")
    }
})
})
app.get('/create',function(req,res){
    res.sendFile(__dirname + '/create.html');
app.post('/doCreate',(req,res)=>{
    let id = req.body.txtID;
    let namePr = req.body.txtNamePr;
    res.end("ban da create san pham: \nID: " + id + "\nName: " + namePr);
})
})
var server = app.listen(5000, function(){
    console.log("haha");
});