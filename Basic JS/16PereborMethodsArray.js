const users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00"
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00"
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00"
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: true,
    balance: 2621.84,
    age: 25,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00"
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 4,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00"
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 5,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00"
  }
];

// forEach//! перебрает массив, ничего не возвращает, некая замена цикла for
// filter
// map //!возвращает массив, основываясь на результате вызова CallBackа
// reduce//! делает из массива структуры
// some/every//! проверка, есть ли в массиве хотя бы 1 элемент, удовлетворяющий условию в callbackе(some), если все элементы удовлетворяют условию в callbacke (every)
// sort//! сортировка
// find//! поиск элемента в массиве

// forEach //! ((1)отдельный элемент массива, (2)индекс этого элемента в массиве, (3)весь массив)
users.forEach((user, i, arr) => {
  console.log(user, i, arr); 
});//! вывод элементов

// filter //!фильтруем по age > 30
const userLess30 = users.filter(user => user.age < 30);//!Фильтр вернет массив, осн. на результате вызова Callbacka. если true - то эл. попадет в новым массив, если folse то нет.
// console.log(userLess30);
const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// Map //! создает новый массив из того что переданный callback возвращает в него
const usersName = users.map(user => user.name);
//! получил массив с всеми name
const usersName = users.map(user => ({ name: user.name, age: user.age }));//! массив где каждое поле это name и age
// console.log(usersName);

// Reduce//!позволяет преобразовать массив в другую сущность или например что то посчитать
//! первый аргемент - callback, вторым аргументов будет считаться первый элемент массива.    acc - результат предидущей итерации 
const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);//! получили общий баланс
// console.log(totalBalance);
const usersObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
}, {});//! получили обьект обьектов
// console.log(usersObj);

// Some/Every //! проверка, есть ли в массиве хотя бы 1 элемент, удовлетворяющий условию в callbackе(some), если все элементы удовлетворяют условию в callbacke (every)
const isMale = users.some(user => user.gender === "male");//! вернет true, хотя бы 1 "malе" есть
const isAllMale = users.every(user => user.gender === "male");//! вернет fulse, нет не каждый "male"
const isAll18 = users.every(user => user.age > 18);
// console.log(isAll18);//! true, всем больше 18

//find //!найти какой то элемент в массиве
const user = users.find(user => user.name === "Valencia Carrillo");//! вернет обьект массива с именем
// console.log(user);

// Sort//! метод сортировки. Ньюансы: 1: меняет исходный массив. 2: сортирует элементы массива как строки(в лексическом значении)
const strArr = ["Denis", "Bill", "Anna"];
strArr.sort();
const numArr = [10, 7, 44, 32];//! 7 будет в конце, т.к. 7 в лексическом значении больше других, для правильной сортировки: ->// 
numArr.sort((prev, next) => prev - next);
//! отсортируем по возрасту
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);
