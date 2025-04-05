const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, '../public');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(PUBLIC_DIR, 'hello.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading hello.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});