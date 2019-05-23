// const db = require('./db.js');
// const User = require('./db.js').User;

// const users = db.getUsers();

const { db, User } = require('./db');

const users = new db.User();

console.log(users);

// Модули кэшируются
require('./db');

const User1 = require('./db');
const User2 = require('./db');

console.log(User1 === User2);
//> true

User1.firstname = 'Vasia';
console.log(User2.firstname);
//> Vasia