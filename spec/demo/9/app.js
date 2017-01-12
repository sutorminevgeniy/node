...
var conf = require('./config');
var log = require('./ext/log');

...

app.set('views', path.join(__dirname, conf.get('app-view')));
app.set('view engine', conf.get('app-engine'));

...

app.get('/testlog', function(req, res){
  log.info('Hello from log');
  res.end('TEST LOG');
}); 