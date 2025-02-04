import express from 'express';
import { PORT } from './env.js' //.js is important
import path from 'path'
const app = express();
// const PORT = process.env.PORT || 5000;

/* 
app  => This varibale holds the created express app, which you can use to: 
 * define routes(app.get(), app.post(), etc)
 * Configure middleware (app.use())
 * Start the server (app.listen())
*/

app.get('/', async (req, res) => {
    // console.log('pathname',import.meta.dirname);
    // console.log('filename',import.meta.url);

    // const filename = new URL(import.meta.dirname).pathname
    // console.log(filename);

    const homePagePath = path.join(import.meta.dirname, 'public', 'index.html');
    res.sendFile(homePagePath)
})


app.get('/about', async (req, res) => {
    res.send('<h1>hello About page</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
})