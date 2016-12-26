function Course(){
  this.getTitle = function(){
    console.log('Node.js');
  };
}

// exports.Course = Course; // module.exports.Course
module.exports = Course;
