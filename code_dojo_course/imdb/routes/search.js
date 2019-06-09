const url = require('url');

const omdb = require('../lib/omdb');

// Функция отправки файла movie.html
function search(req, res) {
  const parseUrl = url.parse(req.url, true); // /search?title=avengers
  const title = parseUrl.query.title;

  omdb.get(title, (error, movie) => {
    if (error) {
      return res.render('error.html', { error: error.message });
    }

    res.render('movie.html', movie);
  })
}

module.exports = search;