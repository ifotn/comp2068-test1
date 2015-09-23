var fs = require('fs');

var animals = fs.readFile('animals.txt', 'utf8', function(err, animals) {
  console.log(animals);  
});

console.log('Hello animals');

var students = fs.readFile('students.txt', 'utf8', function(err, students) {
    console.log(students);
});

console.log('Hello students');