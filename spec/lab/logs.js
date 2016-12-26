var warm = function(msg){
  console.log('Warning: ', msg);
};
var info = function(msg){
  console.log('Info: ', msg);
};
var error = function(msg){
  console.log('Error: ', msg);
};

exports.warm = warm;
exports.info = info;
exports.error = error;