const fs = require('fs');

const readStream = fs.createReadStream('file.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);