const fs = require('node:fs');
const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
console.log(data);
