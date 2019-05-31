const https = require('https');

// Функция получения репозиториев по имени пользователя в гитхабе
function getRepos(username, done) {
  // проверяем есть ли имя пользователя
  if (!username) return done(new Error('Необходимо указать имя пользователя'));

  // параметры запроса
  const options = {
    hostname: 'api.github.com',
    path: `/users/${username}/repos`,
    headers: { 'User-Agent': 'codedojo' } // этот заголовок необходим для доступа на гитхаб
  };

  // Отправка запроса
  const req = https.get(options, res => {
    // для перевода буфера в строку
    res.setEncoding('utf-8');

    if (res.statusCode === 200) {
      let body = '';

      // обработка полченных порций данных
      res.on('data', data => body += data);

      //  обработка по завершенюю получения данных
      res.on('end', () => {
        try {
          const result = JSON.parse(body);

          done(null, result);
        }
        catch (error) {
          done(new Error(`Не удалось обработать данные (${error.message})`))
        }
      })
    }
    else {
      done(new Error(`Не удалось получить данные от сервера (${res.statusCode} ${res.statusMessage})`))
    }
  });

  // Отслеживание ошибок
  req.on('error', error => done(new Error(`Не удалось отправить запрос (${error.message})`)));

  // https.get(`https://api.github.com/users/${username}/repos`, res => {
  //   console.log(res.statusCode, res.statusMessage);
  // })
}

module.exports = {
  getRepos
};