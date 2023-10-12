const fs = require('fs');

let readStream = fs.createReadStream('file.txt');
let content = '';

readStream.on('data', (chunk) => {

    content += chunk
})

readStream.on('end', () => {

    console.log(content);
})

readStream.on('error', err => {

    console.log(err);
})