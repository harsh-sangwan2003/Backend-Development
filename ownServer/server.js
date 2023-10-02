const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let path = "./views";

    switch (req.url) {

        case '/':
            path += '/index.html';
            break;

        case '/about':
            path += '/about.html';
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;

        default:
            path += '/404.html';
    }

    fs.readFile(path, (err, file) => {

        if(err)
        console.log(err);

        else
        res.end(file);
    })

})

server.listen('3000', () => {

    console.log("Server listening on port 3000");
})