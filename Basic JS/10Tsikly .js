//! виды циклов while, do while, for, for of, for in

// let i = 10;
// while(i--) {   //! читаеться: Пока(тут будет true){будет выполн.}
//   console.log(i);
// }

// do {
//   console.log('action');
// } while(i > 0);
//! for ('инициализация'; 'условие'; 'шаг')
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; //! когда нашли 5, остановили цикл
//   }
//   if (i === 6) {
//     continue;//! Пропустить итерацию 6 /прекратить
//   }
//   console.log(i);
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + '*';
// }

// console.log(res);//! передаписали строку res

// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);
//! перебор с массивом обьектов
const users = [
  {
    name: "Denis",
    age: 30,
  },
  {
    name: "Oleg",
    age: 12,
  },
  {
    name: "Maks",
    age: 25,
  },
  {
    name: "Olga",
    age: 2,
  },
];

const usersObj = {};

for (let i = 0; i < users.length; i++) {
  usersObj[users[i].name] = users[i]; //! тут ключ это name по итерации[i], а значение это обьект по итерации[i]
}

// console.log(usersObj['Denis']); //! так получаю конкретный свой обьект

//! цикл for in нужен для перебора обьектов. Тут нет итератора, этот цикл пройдеться по всем ключам обьекта, пока они не закончатся
// const user = {
//   name: 'Denis',
//   age: 30
// };
//! for ('произвольная переменная' in 'обьект который перебираем')
// for (let key in user) {
//   console.log(key);//! в key содержится ключ на каждой итерации
//   console.log(user[key]);//! получены значения ключей
// }
//! этот цикл служит для более удобного перебора массивов
for (let value of users) {
  console.log(value); //! и уже в value будет храниться элемент массива
}
