var h = require('./say-hello');
var w = require('./say-world');

h();
w.world();
require('./say-world').world();