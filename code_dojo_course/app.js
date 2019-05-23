// const db = require('./db.js');
// const User = require('./db.js').User;

// const users = db.getUsers();

const { users, getUsers, User } = require('./db');
require('./db');

const user = new User();

console.log(users);

// Модули кэшируются
const User1 = require('./db');
const User2 = require('./db');

console.log(User1 === User2);
//> true

User1.firstname = 'Vasia';
console.log(User2.firstname);
//> Vasia