const http = require('http');
const port = 3003;

const server = http.createServer((req, res) => {

    console.log(req.url);

    switch (req.url) {
        case "/":
            res.end("Hello World!");
            break;
        case "/home":
            res.end("Welcome To Home Page...");
            break;
        case "/blog":
            res.end("Welcome To blog Page...");
            break;
        case "/contacts":
            res.end("Welcome To contacts Page...");
            break;
        case "/users":
            res.end("Welcome To users Page...");
            break;

        default:
            res.end("server not  found...");
    }
})

server.listen(port, () => {
   console.log(`server running $(port)`);
})