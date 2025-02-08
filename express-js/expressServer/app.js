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

//use absoulte path is good practice 
const staticPath = path.join(import.meta.dirname, 'public')
// to serve static file 
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: true }))//!important middleware //to parse formdata for post method for nesting property
// app.use(express.urlencoded()) //to parse formdata for post method

// console.log(__dirname)
// console.log(filename)
console.log(import.meta.dirname)
console.log(import.meta.filename)

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

// app.get('/contact',(req, res)=>{
//     console.log(req.query);
//     res.redirect('/')
// })

app.post('/contact', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.use((req, res) => {
    //    return res.status(404).send('Page Not Found');
    return res.status(404).sendFile(path.join(import.meta.dirname, 'views', "404.html"))
})

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
})