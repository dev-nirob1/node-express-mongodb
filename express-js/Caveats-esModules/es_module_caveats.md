# **Es Modules - Caveats** #

1. Es Modules (import/export) are an alternative of CommonJs (require/module.exports).
1. In newer verisons of Node.js(14.8+), you can use top-level await without needing to wrap it in a async function.
*example:*
```
const response = await fetch('https:exmaple.com');
const json = await response.json();
console.log(json);
```


*__dirname and __filename Issue:*
1. In CommonJs, __dirname(current directory) and __filename(current file Path) are available by default.
1. In Es Modules, they don't exist.
1. This can be problemetic when you need to get the directory or file path.

# **Es Modules vs Common JS** #

- Solution(Node.js 20.11.0+):
1. console.log(import.meta.dirname);
1. console.log(import.meta.filename);
1. In Node.js 20.11.0 and above, __dirname and __filename can be accessed using import.meta.

# **Solution for Older versions(Before 20.11.0)** #
```
 import path from 'path'
 const __filename = new URL(import.meta.url).pathname;
 const dirname = path.dirname(__filename);
 console.log({__dirname, __filename});
 ```
