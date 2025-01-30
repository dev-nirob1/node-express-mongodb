# **Everythin in Graph** #

```mermaid
graph TD;
    A[Application] -->|JavaScript| B[V8 (JavaScript Engine)];
    B -->|OS Operation| C[OS Operation];
    B -->|Node.js API| D[Node.js Bindings];

    D -->|Async Request| E[Libuv (Asynchronous I/O)];
    E --> F[Event Queue];
    F --> G[Event Loop];

    G -->|Blocking Operation| H[Worker Threads];
    H -->|File System| I[File System];
    H -->|Network| J[Network];
    H -->|Process| K[Process];

    G -->|Execute Callback| L[Callback Execution];
```

###  How This Works:
- **Application → V8 Engine**: JavaScript runs inside the V8 engine.  
- **V8 → Node.js Bindings**: Interacts with system APIs via Node.js.  

- **Libuv Handles Async I/O**:  
  - Moves tasks to the **event queue**.  
  - Uses **worker threads** for blocking operations like file system, network, and process handling.  
- **Event Loop**: Handles callbacks once operations complete.  
