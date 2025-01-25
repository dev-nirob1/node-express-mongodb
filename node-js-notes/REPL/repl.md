# **Introduction to REPL (Read-Eval-Print Loop)**

The REPL (Read-Eval-Print Loop) is an interactive programming environment provided by Node.js. It allows you to execute JavaScript code one statement at a time, making it a valuable tool for testing, debugging, and learning.

## **What Does REPL Stand For?**
- **Read**: Reads the input code from the user and parses it into a data structure that the JavaScript engine can understand.
- **Eval**: Evaluates the input code. If the input is a valid expression, the REPL comuptes the result.
- **Print**: Prints the output or result of the evaluated code.
- **Loop**: Repeats the process, allowing for continuous interaction until explicitly exited.

## **How to Start REPL in Node.js**
1. Open a terminal or command prompt.
2. Type `node` and press **Enter**.
3. This launches the Node.js REPL environment, where you can type and execute JavaScript commands interactively.

## **Key Features of REPL**
- **Interactive Execution**: Execute one statement at a time.
  ```javascript
  > 2 + 2
  4
  ```
- **Variable Declaration**: Declare and use variables in real-time.
  ```javascript
  > let name = "Node.js";
  > console.log(name);
  Node.js
  ```
- **Built-in Commands**:
  - `.exit` - Exit the REPL.
  - `.help` - List REPL commands.
  - `.clear` - Clear the current context.

## **Why Use REPL?**
- Test JavaScript snippets quickly.
- Debug and explore functions.
- Learn Node.js interactively.