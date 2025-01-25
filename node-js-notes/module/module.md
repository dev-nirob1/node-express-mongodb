# ** Understanding the Node.js Module System** #

**Self-contained code unit:**

- Each file in Node.js is treated as a separate module.
- Variables, functions, or objects defined in one file are not accessible in another file by default unless you explicitly export them.

**Encapsulation**

- Node.js uses the CommonJs module system (module.exports and require) to ensure the code in one file does not polluute or interfere with the global scope.
- This makes your code modular, maintainable, and easier to debug.

# **What Exactly is a Module in Node.js** #

- A module in Node.js represents a file containing code that is self-contained, reusable, and encapsulated.
- Node.js uses the CommonJs module system.
- This module system came before ES modules was introduced in JavaScript; that's why it's syntax is different.
- Modules in Node.js are created by defining separate files for different functionalities.
- You Must export anything you want to make accessible to other module.


# **Key Takeways** #

- Avoid mixing module.exports and exports.property incorrectly. If you reassign module.exports, it will override any previous exports.property assignments.

**Use consistent syntax for clarity:**

- Assign everything at once with module.exports = {...}.
- Or assign properties individually with module.exports.property.