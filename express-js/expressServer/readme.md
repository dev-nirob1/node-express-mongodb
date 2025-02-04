# **Static Files in Express.js** #

- Static files as name mentions are files which don't change, these can be assets like images, css, html, font etc.
- Express has middleware named express.static('public') which we can use to serve static files.
- Fiels in the static directory are accessible via their URL. FOR instance,if you have an image logo.png in the public folder, you can access it in the browser with http://localhost:3000/logo.png.
- It will hanlde all files inside the directory provided.

---------------------------------------

# **Sending Files in Express.js** #

- If you use es module in express you can't use (__dirname) or (__filename).

 *Alternative* 
- For directory name (import.meta.dirname)
- For fileName (import.meta.url)
-  For getting actual path const __filename =  new   URL(import.meta.url)
 *output:*
```
URL {
  href: 'd:\\backend-with-thapa\\node-express-mongodb\\express-js\\expressServer',    
  origin: 'null',
  protocol: 'd:',
  username: '',
  password: '',
  host: '',
  hostname: '',
  port: '',
  pathname: '\\backend-with-thapa\\node-express-mongodb\\express-js\\expressServer',  
  search: '',
  searchParams: URLSearchParams {},        
  hash: ''
}
```
```
const __filename =  new   URL(import.meta.url).pathname //for the exact path
````