const { User } = require('./db');


// Вывод всех записей
User.findAll().then(users => {
  console.log("All users:", users, JSON.stringify(users, null, 4));
});
