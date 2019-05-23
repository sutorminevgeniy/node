console.log('db.js');

require('./user');
const users = require('./users');

function getUsers() {
  return users;
}

class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// module.exports.getUsers = getUsers;
// exports.getUsers = getUsers;

// module.exports = User;

module.exports = {
  User,
  users,
  getUsers
};

// ! exports = module.exports;