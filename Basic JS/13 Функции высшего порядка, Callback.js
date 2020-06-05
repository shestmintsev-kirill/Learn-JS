//! Функции высшего порядка это ф-ии которые принимают в качестве параметров другие функции, или возвращают функции.
// function highOrder(value, callback) {
//   const arrFromStr = value.split(' ');
//   console.log(arrFromStr);
// }

// function myCallback(char) {}

// highOrder('Denis Mescheryakov');

function question(job) {
  const jobsDictionary = {
    developer: 'Что такое JS?',
    teacher: 'Какой предмет вы преподаете?',
  };

  return function(name) {
    return jobsDictionary[job] + ' ' + name;
  };
}

const developerQustion = question('developer');
console.log(developerQustion);
console.log(developerQustion('Denis'));
