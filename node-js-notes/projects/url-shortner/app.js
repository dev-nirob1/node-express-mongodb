import { readFile, writeFile } from 'fs/promises';
import { createServer } from 'http';
import crypto from 'crypto'
import path from 'path';

const PORT = 3000;
const DATA_FILE = path.join('data', 'links.json')

const serveFile = async (res, path, contentType) => {
    try {
        const data = await readFile((path))
        res.writeHead(200, { 'Content-Type': contentType });
        return res.end(data)
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end("404 page not found")
    }
}

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data)
    } catch (error) {
        if (error.code === 'ENOENT') {
            // 'ENOENT' === error no entry 
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {}
        }
        throw error;
    }
}

const savelinks = async (links) => {
    return await writeFile(DATA_FILE, JSON.stringify(links));
}

const server = createServer(async (req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            return await serveFile(res, path.join('public', 'index.html'), 'text/html')

        } else if (req.url === '/style.css') {
            return await serveFile(res, path.join('public', 'style.css'), 'text/css')
        }
        else if (req.url === '/links') {
            const links = await loadLinks()
            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(links))
        }
    }

    if (req.method === 'POST' && req.url === '/shorten') {
        const links = await loadLinks()

        let body = '';
        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', async () => {
            const { url, shortCode } = JSON.parse(body)

            if (!url) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                return res.end('URL is Required')
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex');

            if (links[finalShortCode]) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                return res.end('Short code already exists. Please choose another')
            }

            links[finalShortCode] = url;
            await savelinks(links)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true, shortCode: finalShortCode }))
        })
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not found')
    }
})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})