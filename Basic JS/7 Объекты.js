const user = {    //! Обьект состоит из пар: 'Ключ: значение'
  firstName: 'Denis', 
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  //исключительно обьект можно обьявлять в '', если назв. сложное:
  'user-address': { 
    city: 'Kharkiv'
  },
  skills: ['html', 'css', 'js']
};

let value;
let prop = 'skills';
//обращение к обьектам и свойствам обьекта:
value = user.firstName; //вывели значение обьекта
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0];

user.firstName = 'Den'; // перезаписали значение

value = user.firstName;

user.info = 'Some info'; // в случае если поля нет, то оно запишется в обьект, добавилось поле info и туда записалось значение

value = user.info;

user['user-address'].city = 'Kiev';//перезаписали значение
user['user-address'].country = 'Ukraine';//создали св-во с значением

console.log(user.plan);
user.plan = {};
user.plan.basic = 'basic';//нельзя записать свойство в несуществующий обьект, только в случае, если он пустой {}

console.log(value);
console.log(user);
