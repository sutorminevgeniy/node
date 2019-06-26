const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const { reverseString } = require('./utils');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/reverse', (req, res) => {
    let original = req.body.string;
    let reversed = reverseString(original);
    
    res.render('reverse', { reversed });
});

app.use((req, res, next) => {
    let error = new Error('Не найдено');
    error.status = 404;
    next(error);
});

if (app.get('env') === 'development') {
    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.render('error', {
            message: error.message,
            error
        });
    });
}

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3000, () => console.log('Сервер работает на localhost:3000'));