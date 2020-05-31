let a = 1;
let b = 0;

// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }
//! Тернарный оператор
// выражение ? если true : если false;
//! тип с else if
// выражение ? если true : выражение ? если true : если false;
b = a > 0 ? a : b + 1;

b =  a > 0 ? 2 : a < 0 ? 3 : 0;


// console.log(`b: ${b}`);
//! Switch case, упрощенный if else для определенных значени
let color = 'yellow';

switch(color) {
  case 'yellow': //!<- склеенные кейсы
  case 'red': 
    console.log('Color is red || yellow');
    break; //! остановка кейса
  default: 
    console.log('Default');
}