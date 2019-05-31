const github = require('./github');

// Получение имени из командной строки (node app codedojo)
const username = process.argv[2];

// Получение репозиториев по имени пользователя в гитхабе
github.getRepos(username, (error, repos) => {
  if (error) return console.error(`Ошибка: ${error.message}`);

  repos.forEach(repo => console.log(repo.name));
})