// server creation
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    console.log("Server created successfully");

    let path = "./views";
    switch (req.url) {

        case '/':
            path += "/index.html";
            res.statusCode = 200;
            break;

        case '/about':
            path += "/about.html";
            res.statusCode = 200;
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', "/about");
            res.end();
            break;

        default:
            path += "/404.html"
            res.statusCode = 200;
    }

    fs.readFile(path, (err, file) => {

        if (err)
            console.log(err);

        else {

            // res.write(file);
            // res.end();

            res.end(file);
        }
    })

})

server.listen(3000, 'localhost', () => {

    console.log("Server listening on port 3000.");
})