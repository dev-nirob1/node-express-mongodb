## **FS MODULE -Node.js** ##

- The fs(File System) module in node.js is a core module that allows you to work with the file system, enabling you to read, write, update, delete, and watch files.

**fs.writeFileSync()**
- Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.

*Syntax:* fs.writeFileSync(filePath, data, options);
- *filePath:* The path to write.
- *data:* The content to write to the file
- *Options:* Includes encoding ('utf-8'), mode, or flags (Optional)

**fs.readFileSync()**
- Reads a file's content and returns it as a string or Buffer.

*Syntax:* fs.readFileSync(filePath, options);
- filePath: Path of the file to read.
- - *Options:* Encoding ('utf-8') to get data as a string (Optional).

**fs.appendFileSync():** 
- Appends data to a file. If the file doesn't exist, it creates the file.

*Syntax:* fs.appendFileSync(filePath, data, options);
- filePatch: File path to append data.
- data: Content to add to the file.
- options: Encoding options('utf-8') (Optional).

**fs.unlinkSync()**
- Deletes a file by its path.

*Syntax:* fs.unlinkSync(filepath)
- filePath: The path of the file to delete.

**fs.renameSync()**
- Renames a file from one name to another.

*Syntax:* fs.renameSync(oldPath, newPath)
- oldPath: Current file path.
- newPath: New file path or name.