function getThis() {
  console.log(this);
}
// getThis();
// window.getThis(); //!ссылается на обьект window
// console.log(window.getThis);

function getPrice(currency = '$') {
  console.log(currency + this.price);
  return this;
}

function getName() {
  console.log(this.name);
  return this;
}

const prod1 = {
  name: 'Intel',
  price: 100,
  getPrice,
  getName() {
    console.log(this.name);
  },
  info: {
    information: ['2.3ghz'],
    getInfo: function() {
      console.log(this);
    },
  },
};
// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();

const prod2 = {
  name: 'AMD',
  price: 50,
  getPrice,
};

prod2.getName = prod1.getName;
// prod2.getPrice();

// prod2.getName();

let str = 'Hello world';
const reversStr = str
  .split('') // ['H', 'e'...] //!по цепочке 
  .reverse() // ['d', 'l'...]
  .join(''); // 'dlrow olleH'
// console.log(reversStr);

const prod3 = {
  name: 'ARM',
  price: 200,
  getPrice,
  // getName,
};
//! контекст
// getPrice.call(prod3, '*');//! call принимает первым аргументоv this, в контексте которого должна быть вызвана эта функция(prod3 - контекст). так же можно еще передавать аргументы в функцию(getPrice)
// getPrice.apply(prod3, ['*']);//! apply, то же что и call, но после контекста аргументы нужно передавать в массиве

// prod3
//   .getName() // prod3
//   .getPrice(); // prod3.getPrice()

//! потеря контекста, пример ->
setTimeout(prod3.getPrice, 1000) //$undefined
//! т.к. setTimeout работает в контексте window, поэтому получаем undefined!!!   исправить можно с помощью bind -> 
const getPriceBind = prod3.getPrice.bind(prod3, '*'); //! метод bind в отличии от apply и call не вызывает функцию, а возвращает эту функцию(но с привязанным контекстом). Первым агрументом передаю привязанный контекст, и можно передать след. привязанные аргументы.
console.log(getPriceBind);
setTimeout(getPriceBind, 1000);
