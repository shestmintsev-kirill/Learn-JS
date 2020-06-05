const plus = (x, y) => x + y;
const plusRes = plus(1, 2); //! вывод функции^
//! запись без стрелочной ф-ии: ->
// function plusFoo(x, y) {
//   return x + y;
// }

//! если нет аргументов:
const withoutArgs = () => console.log('Hello world');//! {} - не нужны если выполняем 1 действие
const singleArg = x => x * 2; //! если 1 аргумент
//! выполнить много действий:
const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b; //moreActions(2, 2)// 10
};
const returnObj = (str = '') => ({ //! запись без return 
  value: str,
  length: str.length,
});

function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}

// plusFoo(1, 2, 3, 'hello');
//! стрелочная ф-ия берет контекст на уровень выше
const obj = {
  firstName: 'Denis',
  age: 30,
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this)); //!ф-ия в качестве CallBack
  },
};

obj.getAge();
// obj.getAgeArrow();
