var src = require('fs').readFileSync('test.multi', 'utf8');

var util = require('util');
var parsed = require('./lib/parser').parse(src + "\n");

console.log(util.inspect(parsed, {depth: null}));