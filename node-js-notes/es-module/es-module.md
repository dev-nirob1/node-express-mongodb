## **ES MODULE in Node.js** ##

- Es Modules (ECMAScript Modules) allow you to use import and export syntax. The have been availble in Node.js since version 12.

- To enable ES Modules, you can either: 
    - Name your file the .mjs extention or
    - Set "type": "module" in oyour package.json. (Recomended)

- Use import and export instead of require and module.exports.
- After Node.js v14.8, you can use top-level await when ES Modules are enabled.

- We'll use ES Modules in this course as it's part of the ECMAScript


| Feature | ES Modules(import/export)| CommonJS(require/module.exports)|
|------|-------|---------|
| Default Export| export default...| module.exports|
| Named Export| export const func = ()=>{};| Not supported(must destructure manually)|
| Import Syntax | import... | const ... = require(...) | 


# Export Types #

| Export Typye | Term | Use Case |
|--------------|------|----------|
| Named Export | 'Named Export'| 'When you need to export multiple functions, constants or variables|
| Default Export | 'Default Export' | When a module has one primary export (e.g., a single function or class)|
| Aggregated Export | 'Export Aggregation' | When grouping multiple exports into one statement for modularity|