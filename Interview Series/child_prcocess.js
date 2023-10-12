const cp = require('child_process');

const output = cp.execSync("node test.js");

console.log(output.toString());