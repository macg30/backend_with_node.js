const { O_DSYNC } = require('constants');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == '/birthday') { 
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200, { 'Content-Type':'text/plain' })
            body = Buffer.concat(body).toString();
            console.log(body);
            const day = body[0] + body[1];
            console.log(day);
            res.end(day);
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');

