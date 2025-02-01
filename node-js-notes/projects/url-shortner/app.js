import { readFile } from 'fs/promises';
import { createServer } from 'http';
import path from 'path';

const PORT = 5000;


const server = createServer(async (req, res) => {
    console.log(req.url);
    if (req.method === 'GET') {
        if (req.url === '/') {
            try {
                const data = await readFile(path.join('public', 'index.html'))
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data)
            } catch (error) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("404 page not found")
            }
        } else if (req.url === '/style.css') {
            try {
                const data = await readFile(path.join('public', 'style.css'))
                res.writeHead(200, { 'content-type': 'text/css' })
                res.end(data)

            } catch (error) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("404 page not found")
            }
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('405 Method Not Allowed')
    }

})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
    console.log('hello world');
})