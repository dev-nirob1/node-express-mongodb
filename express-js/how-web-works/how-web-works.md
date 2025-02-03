# **Request-Response Cycle** #

1. **Client Request:**
   - The user enters a website URL (e.g., `https://example.com`) in the browser's address bar.

2. **DNS Lookup:**
   - The browser uses the Domain Name System (DNS) to translate the domain name (`example.com`) into the server's IP address (e.g., `192.168.1.1`).

3. **HTTP Request:**
   - The browser sends an HTTP GET request to the server's IP address.

4. **Server Processing:**
   - The server receives the request, processes it, and may interact with a database or external services to generate a response.

5. **Server Response:**
   - The server sends a response (e.g., HTML, JSON, or a file) back to the client, along with an HTTP status code (e.g., 200 for success, 404 for not found).

6. **Client Rendering:**
   - The browser receives the response and renders it for the user to view.

## Example

- When a user visits `https://example.com`, the browser sends an HTTP GET request to the server. The server processes the request, retrieves the HTML file, and sends it back to the browser, which then renders the webpage.


# **HTTP and HTTPS** #

- *HTTP (HyperText Transfer Protocol)* is used to transmit data over the web.
- It defines how requests and responses should be structured and handled by servers.
- HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP, using SSL/TLS encryption to protect data from interception and tampering.
- The browser sends an *HTTP/HTTPS* request to the server for a specific resource (e.g., webpage, image, API data).

# **Common HTTP Methods:** #
- GET – Retrieves data from the server (e.g., fetching a webpage).
- POST – Sends new data to the server (e.g., submitting a form).
- PUT – Updates or replaces existing data.
- DELETE – Removes a resource from the server.
- PATCH – Partially updates an existing resource.