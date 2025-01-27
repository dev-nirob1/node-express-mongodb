# **fs/promises Moduel - Node.js** #
- The *fs/promises* module provides a promise-base API for interacting with the fileSystem, allowing asynchronous operations to be handled using modern JavaScript features like async/await or .then() chains. It is part of the fs module in Node.js but designed for those who prefer promises over callback-base or synchronous methods.

**Purpose**
- Simplifies asynchronous file operations by using promises making the code more readable and moder compare to traditional callback-based approaches.


**Create/Write File => fs.promises.writeFile()**
- Creates or overwrites a file with specified content.
- The writeFile() method writes data to a file asynchronously.
- If the file does not exist, it is created and if exist, it's content is replaced.

*Syntax:* fs.promises.writeFiles(path, data, options).then().catch();
---------------------------

**Read File =>fs.promises.readFile()**

- The readFile() method read data from a file.
- It can return the data as a Burffer or string based on the encoding provided.

*Syntax:* fs.promises.readFile(path, options).then().catch()
---------------------------

**Update File =>fs.promises.appendFile()**

- Adds content to the end of a file.
- The appendFile() method adds content without overwriting the existing data.

*Syntax:* fs.promises.appendFile(path, data, options).then().catch()
---------------------------

**Delete File =>fs.promises.unlink()**

- Deletes a file from the filesystem.
- The unlink() method removes the specified file asynchronously.

*Syntax:* fs.promises.unlink(path).then().catch();
----------------------------

* Are you tired of using fs.promises everytime?
- You can actually just import with fs/promises => const fs = require('fs/promises)
- after import like this you don't need to use fs.promises everytime.