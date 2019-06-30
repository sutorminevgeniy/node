const { User } = require('./db');

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
