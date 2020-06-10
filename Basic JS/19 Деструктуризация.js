const user = {
  firstName: "Denis",
  lastName: "Mescheryakov",
  age: 25,
  info: {
    work: "EasyCode",
    skills: ["html", "css"],
  },
};

// const firstName = user.firstName;
// const lastName = user.lastName;

const { firstName: name, lastName, age: years = 30, } = user; //! из обьекта user вытащили свойства, так же можно задавать для свойств переменные, например: ((св-во firstName):(переменная name)), (age: years). Если св-во не присвоено то можно его задать

//! Достаю вложенные обьекты
const {
  info: { work, skills },
} = user;
console.log(skills);

//! Деструктуризация массивов
const colors = ["white", "black", "red", "#89432d"];
const [w, b, red, green = "green"] = colors; //! по порядку, что бы пропустить значени -> [, b, red,...]
// console.log(w, b, red, green);
const names = ["Denis", "Ivan", "Maksim"];
const [name1, ...otherNames] = names; //! с Помощью ...otherNames я получаю массив из оставшихся элементов (всегда в конце)
console.log(name1, otherNames);
const nestedArr = ["hello world", ["key", "value"]];
const [, [key, value]] = nestedArr; //! Достал вложенный массив
// console.log(key, value);

const [...newNames] = names; //! сделал копию массива имен (оператор rest)
const newNames = [...names]; //! или (оператор spread)

console.log(...newNames); //! если применить на вывод ... то будет выведен "массив не как массив"

const colorNames = ["some value", ...colors, ...names]; //!  добавил в начало '' и сделал конкатеницию массивов
// console.log(colorNames);

const newUser = { ...user, age: 30 }; //! копирование объекта user, можно задать свойства и оно заменит его. (1свойство которое копируем, 2свойство которое хотим изменить)
console.log(newUser);

const {
  info: {
    skills: [html, css],
  },
} = newUser; //! получил вложенные свойства html и css
// console.log(html, css);

//! деструктуризация в рамках функции, когда передаю что то в параметры
function myPerson({
  lastName = "&",
  firstName = "&",
  info: { skills } = {},
} = {}) {
  console.log(skills);
}
myPerson(newUser);

function foo(x, y, ...others) {
  console.log(arguments);
  // console.log(Array.prototype.slice.call(arguments));
  const [...args] = arguments; //! получил копию аргументов в виде массива
  console.log(others); //! в этой переменной будет [5, 6], т.к. они собержаться в others
}
foo(1, 2, 5, 6);

const numbers = [2, 3];

function foo2(x, y) {
  console.log(x, y);
}

foo2(...numbers); //! вывел эл. массива

//! Пример
let user = {
    guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
    isActive: false,
    balance: "$2,474.46",
    age: 30,
    eyeColor: "blue",
    name: "Tameka Maxwell",
    gender: "female",
    company: "ENOMEN",
    email: "tamekamaxwell@enomen.com",
    phone: "+1 (902) 557-3898",
    tags: ["aliquip", "anim", "exercitation", "non"],
    friends: [
      {
        id: 0,
        name: "Barber Hicks",
      },
      {
        id: 1,
        name: "Santana Cruz",
      },
      {
        id: 2,
        name: "Leola Cabrera",
      },
    ],
  };
  const {
    name,
    balance,
    email,
    tags: [first, , , last] = [],
    friends: [{ name: friendName }] = [],
  } = user;
  console.log(name, email, balance, first, last, friendName);
