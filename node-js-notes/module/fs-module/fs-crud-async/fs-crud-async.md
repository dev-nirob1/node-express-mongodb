# **Fs Module - CRUD Operations - async** #

**Create (fs.writeFile())**-------------------
- Writes content to the file and over write data, If the file does not exist, it creates one. 

*Syntax:* fs.writeFile(path, data, options, callback).
- path: File path to write.
- data: Content to write.
- options: Specifies encoding('utf-8'), mode or flag.
- callback: A function with an error parameter.
---------------------------------

**Read (fs.readFile())**
- Reads the content of a file asynchronously and returns the data as buffer or string.

*Syntax:* fs.readFile(path, options,callback).
- path: File path to read from.
- optons: An object or string specifying the encoding (utf-8) or flag('r' for reading)
- callback: A function with parameters(err, data)

--------------------------------

**Update (fs.appendFile)**
- Appends new content to the file without overwritig the existing content. If the file doesn't exist, it is created.

*Syntax:* fs.appendFile(path, data, options, callback).

---------------------------------

**Delete (fs.unlink)**
- Deletes a file aynchronously.

*Syntax:* fs.unlink(path, callback)