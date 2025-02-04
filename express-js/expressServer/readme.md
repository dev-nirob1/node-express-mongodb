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