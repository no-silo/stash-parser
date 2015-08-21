var src = require('fs').readFileSync('test.multi', 'utf8');

console.log(require('./lib/parser').parse(src + "\n"));