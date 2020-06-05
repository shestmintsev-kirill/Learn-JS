// >, <, >=, <=, ==, ===, !=, !== //!операторы сравнения

let value;
//возврал булевого значения
value = 1 > 2;
value = 2 <= 2;
value = 1 == 1;
value = 1 == '1'; //не проверяет на тип данных
value = 1 === '1';//проверяет тип данных
value = 1 != '1';//не проверяет на тип данных
value = 1 !== '1';//проверяет тип данных
value = 'a' > 'ab';
value = 'A'.charCodeAt();//показывает числовое значение символа(Юникод)
//!логические операторы
// console.log(value);
//!если действие if () не true, то выполниться действи else
// if (условие) { 
//   // actions
// } else {
//   // else actions
// }

value = 10;

// if (value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }

// value = 100;

// if (value) {
//   console.log('some actions', value);
// } else {
//   console.log('else', value);
// }

//!операторы: (|| или) (&& и) (! не)
// value = null;
//! если не value (!value) то ->
// if (!value) {
//   console.log(value);
// }
//!проверка, есть ли что то в массиве (испрользуя length) ->
// value = [1];
// if (value.length) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }

// value = null
//! проверка, является ли массив-массивом (Array.isArray())
// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }


// let user = {
//   name: null
// };
//! проверка, есть ли у обьекта такое значение?(name), ответ булевый, но без проверки есть ли значение у name. Так проверка идет с значением: (user.name)
// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('else');
// }

//! (|| или) (&& и). Оператор && запинается на Лжи(каждое значение пытается преобразовать с fulse), а || на правде(преобразовать к true)
// value = 0 || 0 || null; //! ищет true

// let age = 10;

// if (age < 16 || age > 65) {
//   console.log('some actions');
// } else {
//   console.log('else');
// }
//! исходя из булевого значения вернет в nickname
// let serverNickname = '';
// let nickname = serverNickname || 'default nickname';

// console.log(nickname);

// value = 1 && 0 && 3; //! запинается на лжи (0), если все правидови, то она вернет последнее true

//!в этом случае сравниеваем что оба условия подходят ->
// productPrice = 10;

// if (productPrice >= 5 && productPrice <= 20) {
//   console.log('беру');
// } else {
//   console.log('else');
// }

// console.log(value);
//! возможно делать вложенные условия -> else if
value = 10;

if (value < 10) {
  console.log('value < 10', value);
} else if (value >= 10) {
  console.log('value >= 10', value);
} else {
  console.log('else');
}