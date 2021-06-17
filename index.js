const http = require('http');
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
    console.log(`Request made ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
})
server.listen(port, hostname, () => {
    console.log(`Server running at port http://${hostname}:${port}`);
});

