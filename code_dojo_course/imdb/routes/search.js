const fs = require('fs');
const path = require('path');
const url = require('url');

const omdb = require('../lib/omdb');

// Функция отправки файла movie.html
function search(req, res) {
  const parseUrl = url.parse(req.url, true); // /search?title=avengers
  const title = parseUrl.query.title;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  omdb.get(title, (error, movie) => {
    if (error) throw error;

    console.log(movie);
  })

  const stream = fs.createReadStream(path.resolve('public', 'movie.html'));

  stream.pipe(res);
}

module.exports = search;