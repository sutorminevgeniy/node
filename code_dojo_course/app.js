// const db = require('./db.js');
// const User = require('./db.js').User;

// const users = db.getUsers();

const { users, getUsers, User } = require('./db');

const user = new User();

console.log(users);