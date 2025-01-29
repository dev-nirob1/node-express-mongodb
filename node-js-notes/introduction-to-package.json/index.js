const http = require('http');
const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello World')
        res.end()
    }
    if(req.url === '/contact'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello World. Contact me</h1>');
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})