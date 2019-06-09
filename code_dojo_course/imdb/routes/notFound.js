// Функция отправки файла index.html
function notFound(req, res) {
  res.render('error.html', { error: 'Не найдено' });
}

module.exports = notFound;