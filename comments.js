// Create web server
// 1. create a server
// 2. listen to the port
// 3. create a route
// 4. get the data from the server
// 5. send the data to the client

// 1. create a server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // 3. create a route
    if (req.url === '/comments') {
        // 4. get the data from the server
        fs.readFile('./comments.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            // 5. send the data to the client
            res.end(data);
        });
    } else {
        res.end('Not Found');
    }
});

// 2. listen to the port
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});