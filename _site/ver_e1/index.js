var express = require('Express');
var admin = require('./admin.js');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

// миделвейр: вывод текущей информации
app.use(function (req, res, next) {
    console.log('req.path = ', req.path, ' | req.baseUrl = ', req.baseUrl);

    if (req.headers.referer) {
        if (req.headers.referer.search(/\/admin\//i) === -1) {
            express.static('public')(req, res, next);
        }
        else {
            express.static('public_admin')(req, res, next);
        }
    }
    else {
        next();
    }
});

// отправка статических файлов
// app.use(express.static('public'));

// перенаправления на роутер "/admin"
app.use('/admin', admin);


// Шаблонизатор
app.get('/first_template', function (req, res) {
    res.render('first_view');
});

// шаблонизатор с параметрами
app.get('/dynamic_view', function (req, res) {
    res.render('dynamic', {
        name: "TutorialsPoint",
        url: "http://www.tutorialspoint.com"
    });
});

app.get('/', function (req, res) {
    res.send("Hello world!");
});

// запрос с параметрами
app.get('/:id', function (req, res) {
    res.send('The id you specified is ' + req.params.id);
});

//  запрос для всех остальных url
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);
// http://localhost:3000