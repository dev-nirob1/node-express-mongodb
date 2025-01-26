# **Path Module - NodeJs** #

- In Node.js the path module provides utilities for working with file and directory paths. It's a built-in module, so you don't need to install any external packages to use it.

**Special Node.js Constant**
*__filename*
- Provides the absolute path of the currently executing file

*__ dirname*
- Provides the absoulte directory path of the currently executing file.

*note, these are only available in commonjs*

# **Path Module Features** #

- *path.parse():* Return an object with details about a given path, including root, dir, base ext and name.
- *path.join():* Joins multiple path segments into one, usgin the appropriate separate( \ on windows, / on Linux/ MacOS).
- *path.resolve():* Resolves a sequence of paths into an absolute path, starting from the currenct directory. 
- *path.extname():* Extracts the file extension from a given path.
- *path.basename():* Returns the last part of a path (e.g., file name with extension).
- *path.dirname():* Returns the directory part of a path.
- *path.sep():* Returns the platform-specific path segment separator (\ for windows, / for Linux and macOS).