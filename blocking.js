var fs = require('fs');

var animals = fs.readFileSync('animals.txt', 'utf8');
console.log(animals);
console.log('Hello animals');

var students = fs.readFileSync('students.txt', 'utf8');
console.log(students);
console.log('Hello students');

