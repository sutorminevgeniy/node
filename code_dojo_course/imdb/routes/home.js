// Функция отправки файла index.html
function home(req, res) {
  res.render('index.html', null);
}

module.exports = home;