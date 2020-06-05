//! замыкание это ф-ия которая ссылается на свободные переменные
//! свободные переменные это все переменные которые не были переданы этой ф-ии как параметры и небыли обьявлены внутри функции как локальные переменные.
function getFullName(firstName, lastName) {
  return function() {
    return `${firstName} ${lastName}`;
  };
}

const getname = getFullName('Denis', 'Mescheryakov');
// console.log(getname()); //! в случае вызова вернула Denis Mescheryakov

function updateValue(val = 0) {
  let x = val;
  return function(num = 0) {
    return (x += num);
  };
}

const updtVal = updateValue(2); //! функция запоминает свое окружение
const updtVal2 = updateValue(4);
// console.log(updtVal(1));
// console.log(updtVal(0));
// console.log(updtVal2(2));
// console.log(updtVal2(0));

function checkCred() {
  const login = 'test';
  const password = 'somePassword'; //! локальные переменные к которым нет доступа снаружи

  return { //! вернули в доступ снаружи обьект с двумя методами, это методы в замыкании получают доступ к лок. перем.^ и сравнивают с value и возвращают булевое значение.
    checkLogin(value) {
      return login === value;
    },
    checkPassword(value) {
      return password === value;
    },
  };
}

const check = checkCred();
// console.log(check); //! нет прямого доступа к лок.перменным login/password, только через отд. методы.
// console.log(check.checkLogin('test'));

function closureExample() {
  const arrOfFunc = [];
  let value = '';

  for (let i = 0; i < 10; i++) {
    value += i;
    arrOfFunc.push(function() {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}

const res = closureExample();
res[0]();
res[5]();
