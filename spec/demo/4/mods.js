var h = require('./say-hello');
var w = require('./say-world');
var mod = require('./my-module.js');

h();
w.world();
require('./say-world').world();
mod.foo();
mod.bar();