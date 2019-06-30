const { sequelize, User } = require('./db');

// Синхронизирует все таблицы
// sequelize.sync()

// Синхронизирует таблицу с базой данных если её нет создаёт
User.sync().then(() => {
  console.log('Table User sync.');
});

// Синхронизирует таблицу с базой данных если её нет создаёт,
// если есть очищает ({ force: true })
// после завершения синхронизации добавляет новую запись
// User.sync({ force: true }).then(() => {
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });