import express from 'express';
import { PORT } from './env.js' //.js is important
const app = express();
// const PORT = process.env.PORT || 5000;

/* 
app  => This varibale holds the created express app, which you can use to: 
 * define routes(app.get(), app.post(), etc)
 * Configure middleware (app.use())
 * Start the server (app.listen())
*/

app.get('/', async (req, res) => {
    res.send('<h1>hello world</h1>')
})
app.get('/about', async (req, res) => {
    res.send('<h1>hello About page</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
})