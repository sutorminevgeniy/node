const Sequelize = require('sequelize');

// Настройка соединения с базой
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Проверка соединения с базой
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// Создание моделей таблицы
const Model = Sequelize.Model;

class User extends Model {}
User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});

// Вывод всех записей
User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});

// Создание новой записи
User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});
User.create({ firstName: "Jane", lastName: null }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});

// Удаление записей с firstName == "Jane"
User.destroy({
  where: {
    firstName: "Jane"
  }
}).then(() => {
  console.log("Done");
});

// Изменение полей в записях с lastName == null к "Doe"
User.update({ lastName: "Doer" }, {
  where: {
    lastName: null
  }
}).then(() => {
  console.log("Done");
});
