# **Query Parameters in Express.js** #

- Query parameters are key-value pairs appended to a URL after a *?*, separated by *&* like /search?query=express&limit=10.
- In Express.js, they can be accessed using *req.query*, which returns an object containing the parameters.
- For Example, in */search?page=4*, *req.query.page*.
- Query parameters are often used to pass optional or filter data to the server without modifying the route.
- The are always part of the URL and visible in the browser address bar.