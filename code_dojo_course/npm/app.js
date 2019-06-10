var bcrypt = require('bcryptjs');
const colors = require('colors');

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("qwerty", salt);

const match = bcrypt.compareSync("qwerty", hash);

console.log(hash.rainbow, match);