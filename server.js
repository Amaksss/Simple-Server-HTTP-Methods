const http = require('http');
const {books, author} = require('./library');



const PORT = 8900;
const HOSTNAME = 'localhost';

function requestHandler(req, res) {
    console.log(req.url);
    console.log(req.method);

    //GET /books
    if (req.method === "GET" && req.url === "/books") {
    res.write(JSON.stringify(books));
    res.end();
    } else if (req.method === "PUT" && req.url === "/books") { //put books
        res.write("I want to put some books");
        res.end();
    } else if (req.method === "DELETE" && req.url === "/books") { //delete books
        res.end("Books Deleted");
    }
    




    //GET /books/author
    if (req.method === "GET" && req.url === "/books/author") {
        res.write(JSON.stringify(author));
        res.end();
    }

    //POST /books/author
    if (req.method === "POST" && req.url === "/books/author") {
        res.write("I want to post some authors");
        res.end();
    }

    //PUT /books/author
    if (req.method === "PUT" && req.url === "/books/author") {
        res.write("I want to put some authors");
        res.end();
    };
}

const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
    console.log(`server is listening on ${HOSTNAME}: ${PORT}`);
});
