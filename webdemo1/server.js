var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/10352736_1569286260016010_8595171215862802497_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=tck_jvuTdi8AX9kQFxQ&_nc_ht=scontent.fhan2-2.fna&oh=9e2dd247ec59a325338fa8dde4371dfa&oe=5EF4B1B5" style="width:180px" alt="..."/><br>Pham Ngoc Dai</body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')