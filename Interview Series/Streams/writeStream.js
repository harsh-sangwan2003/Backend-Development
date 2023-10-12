const fs = require('fs');

const content = 'I love coding.';

const writeStream = fs.createWriteStream('output.txt');

writeStream.write(content);
writeStream.end();
writeStream.on('finish', () => {
    console.log("Completed");
})