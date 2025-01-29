# **Introduction to npm** #

- npm is a popular package manager which comes bundled with Node.js.
- It is a CLI tool used to install, update and remove external packages.
- You can also create your own package and publish it on npmjs.com registry.
- Do not confuse npm CLI with npmjs.com, as it's a registry where most of the packages of Node.js are saved.
    -There are alternative Node.js package managers rregistry like JSR, which we will discuss in future.
- Fun Facts:
    - npm souldn't be written in capitalized form unless you have everything as capital.
    - npm doesn't stand fro Node package Manager even though many people refer to it as that. It is a recursive acronymic abbreviation for "npm is not an acronym".

# **npm commands** #

- Before following these commands, make sure you initialized your project.
- *npm install <package-name>*
    -Alternatively, you can use npm i.

- After installation, you will notice a node_modules folder and package-lock.json.
    - node_modules is what stores all the installed packages. It's usually heavy, so make sure to include it in .gitignore so that it won't get pushed on version control and avoid it while sharing with others.
    - You will notice that there are some packages which you didn't install, it's because the package that you installed depend on those third-party packages.
    - package-lock.json includes exact version of all packages that you install. It makes sure to prevent breaking changes in newer versions of package.

- Now, you can use the package by importing normally as you do with core modules.
- While importing, first Node.js checks for core modules, then files or folders, and at last looks inside node_modules.    

# npm commands #

- *npm install*
    - Even if you delete node_modules, you can use this command to install all of them again. It uses version specified in package-lock.json or package.json.

- *npm list*
    - Because of symbol, the versions specified in package.json might not be installed.
    - To see the exact versions of all packages installed in your project.
    - Use -a flag to see whole list.

- *npm view <package-name>*
    - To see details of a package that you installed including version, license, author, and so on.

- *npm view <package-name> <package.json-property>*
    - Example: npm view express version.
    - You can use it to view any property from package.json of a package that you installed.
    
- *npm view <package-name> versions*
    - You can use it to see all versions of a package.

- npm install <package-name>@<version>
    -examples: 
        - npm install express@4.0.0 // ^4.0.0
        - npm install express#4.0.0 --save-exact // To exact version.
        - npm install express#~4.0.0
        - npm install express@4.2.x
    - You can use any symbols while specifying version.

- npm outdated
    - It shows outdated packages in your project.
    - Current: The version of the package currently installed in your project.
    - Wanted: The latest version that satisfies the version range defined in your package.json. It basically uses the symbols to get it.
    - Latest: Absolute latest version of the package.
    
- npm remove <package-name>

- npm update
    - This updates all the packages in your project, but it follows the range definned in package.json. It doesn't update the absolute latest version.

- npx npm-check-updates
    - npx is a *CLI* tool that comes with npm.
    - It is used to execute a package without requiring you to install globally or locally.
    - It is useful for temporary usage of a package.
    - npm-check-updates is a package which you can use to upgrade your packages to absolute latest versions.
    - Use -u flag at the end to update the packages after reviewing.
    - This only updates package.json, then you can use *npm install* to update the packages.