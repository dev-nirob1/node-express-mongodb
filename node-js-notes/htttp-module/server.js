const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello World. This is my first node.js server')
        res.end();
    }
    if (req.url === '/contact') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>hello World. Contact me</h1>')
        res.end();
    }
    if (req.url === '/about-me') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>hello World. I am Al Hasan Nirob. I am web developer</h1>')
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})