# **Synchronous vs Asynchronous** #

|Synchronous Code| Asynchronous Code|
|----------------|------------------|
|Tasks aare executed sequentially.|Tasks don't block execution|
|Each task blocks the next until completed|Uses callbacks, promises, or async/await.|

# Synchronous Code #
```const data = fs.redFileSync('example.txt', 'utf-8');
console.log('file content:' data);
```

# Asynchronous Code #
```fs.readFile('example.txt', 'utf-8, (err, data)=>{
    if(err){
        console.log('Error reading file', err)
        return;
    }
    console.log('File content;', data)
})
console.log('hello world')
```


# **Node.js Elements** #

**V8**
- Google's high-performance JavaScript engine that compiles JavaScript into machine code.

**Libuv**
- A 'C' library that provides Node.js with cross-platform support for asynchronous I/O operations, file system networking, and more.

- Includes the event loop and thread pool, enabling non-blocking tasks like file reading, networking, and timers.



# **How Node.js program starts** #

| Main Thread |
|-------------|
|Initialize Program|
|Top Level Code|
|Imports Modules|
|Registers Event Callbacks|
|Start Event Loop|

    Offloading 
         ⬇

|Thread Pool|
|Thread #1|Thread #2|
|Thread #3|Thread #4|

- Thread pool by default has 4 threads.
- Event loop, and thread pool are part of 'Libuv' which offloads heavy tasks to thread pool.
- Heavy tasks include file system, cryptography, compression etc.