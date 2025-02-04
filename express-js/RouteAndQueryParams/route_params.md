# **Route parameters in Express.js** #

- Route parameters in Express.js are dynamic parts of the URL that can be accessed using *req.params.*.
- The are defined in ther route path with a *colon(:)*, e.g. */user/:id/view/:article where (id) is a route parameter.
- You can access the value of a route parameter via *req.params.id*, req.params.article in the route handler.
- Route parameters are used to capture values from the URL and pass them to the route handler for processing, like user ID's, product names, etc.
- Express autometically parses and makes the values available in *req.params* as an object where the parameter name is the key.