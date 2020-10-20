var http = require('http');

    http.createServer(function(req, res) {
        res.writeHead(200,{'content-Type': 'text/plain'});
        res.write('<h1>Hello Morther Fucker</h2>');
        res.write('<p>Pra yut!!');
        res.end();

    }).listen(8080);
    console.log('NodeJS is running!');
    console.log('To quit, press Ctrl+C');