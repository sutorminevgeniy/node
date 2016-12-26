var fs = require('fs');
var http = require('http').createServer().listen(8080);

http.on('request', function(req, res){
  res.writeHead(200);
  var newFile = fs.createWriteStream('file-2.txt');
  // req.pipe(res);
  req.on('data', function(txt){
    txt = 'New: ' +  txt;
    newFile.write(txt);

    // var buffer = newFile.write(txt); //false
    // if(!buffer) req.pause();
  });

  // newFile.on('drain', function(){
  //   console.log('PAUSE');
  //   req.resume();
  // });

  req.on('end', function(){
    res.end('UPLOADED');
  }); 
});