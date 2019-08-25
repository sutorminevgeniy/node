var express = require('express');
var router = express.Router();

// миделвейр: вывод текущей информации
// router.use(function (req, res, next) {
//     console.log('req.path = ', req.path, ' | req.baseUrl = ', req.baseUrl);

//     next();
// });

router.get('/', function (req, res) {
    res.send('GET route on admin.');
});
router.post('/', function (req, res) {
    res.send('POST route on admin.');
});

// Шаблонизатор
router.get('/first_template', function (req, res) {
    res.render('first_view_admin');
});

// запрос с параметрами
router.get('/:name/:id', function (req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

//  запрос для всех остальных url
router.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

//export this router to use in our index.js
module.exports = router;