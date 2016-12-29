var url = require('url');
var request = require('request');
var express = require('express');
var ejs = require('ejs');

// var MY_IP = '80.250.209.226'; 
var MY_IP = '31.132.139.149';

var app = express();
app.listen(8080); 
app.set('views', __dirname);

app.get('/google/feeds/for/:search', function(req, response){
  var search = req.params.search;
  
  var options = {
    protocol: 'http',
    host: 'ajax.googleapis.com',
    pathname: '/ajax/services/feed/find',
    query: {v:'1.0', userip:MY_IP, q:search}
  };
  var searchURL = url.format(options);

  request(searchURL, function(err, res, body){
    var feeds = JSON.parse(body);
    response.render('google-search.ejs', {feeds: feeds.responseData, keyword: search});
  });

});

var categories = {
  'auto': 'Автомобили',
  'world': 'В мире',
  'internet': 'Интернет',
  'sport': 'В мире спорта',
  'culture': 'Культура',
  'movies': 'Кино',
  'politics': 'Политика',
  'index': 'Главные новости',
};

app.get('/yandex/:cnt/news/for/:search', function(req, response){
  var search = req.params.search;
  if(!(search in categories)){
    search = 'index';
  }
  var name =categories[search];
  var cnt = req.params.cnt;

  var options = {
    protocol: 'http',
    host: 'ajax.googleapis.com',
    pathname: '/ajax/services/feed/load',
    query: {
      v:'1.0', 
      num: cnt,
      userip: MY_IP, 
      q: 'http://news.yandex.ru/' + search + '.rss'
    }
  };
  var searchURL = url.format(options);

  request(searchURL, function(err, res, body){
    var news = JSON.parse(body);
    response.render('yandex-news.ejs', {news: news.responseData.feed, category: name, count: cnt});
  });

})