const str = new String("hello world");
// console.log(str)
function Product(brand, price, descount) {
  //принято ф-ию конструктор называть с большой буквы
  //1: создаеться новый обьект
  //2: на этот обьект устанавливается ссылка this
  //3: возвращает этот обьект
  this.brand = brand;
  this.price = price;
  this.descount = descount;
}

//! Прототип это специальное свойство для любого объекта которое являеться обьектом с набором свойств и методов, которое доступно для всех порожденных от этого прототипа/класса/ф-ии конструктора экземпляров и при обращении к такому методу js ищет этот метод внутри обьекта, потом ищет внутри прототипа по цепочке прототипов.

Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.descount)) / 100;
}; //перенес метод в _proto_, теперь он содержиться в кажом экземпляре и можем вызывать его. Контекст this ссылаеться при этом на обьект

Product.prototype.getPrice = function (newPrice) {
  this.price = newPrice;
};

const apple = new Product("Apple", 100, 15);
const samsung = new Product("Samsung", 200, 20);

// console.log(apple);
// console.log(samsung);

//*Наследование
//Object.create
const protoForObj = {
  sayHello() {
    return "hello world";
  },
};

//!Object.create это специальный метод который позволяет создать новый обьект с указанным обьектом прототипа и свойствами
const obj = Object.create(protoForObj, {
  firstName: {
    value: "Kirill",
  },
}); // первым аргументов он принимает объект который будет прототипом для нового объекта, Второй агрумент(необязательно) может указывать новые свойства(объект с набором свойств) //создал пустой обьект для которого прототипом явл обьект protoForObj

//!Наследование - смысл наследования в том, что бы взять от родительского класса все св-ва и методы и расширить их,
// 2 вида наследования - Функциональное и прототипное

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.seyHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const user = new User("Kirill", "Shestmintsev");

//Customer
//! функциональное наследование
function Customer(firstName, lastName, membership) {
  User.apply(this, arguments);
  this.membership = membership;
}
//! прототипное наследование
Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.getMemberShip = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer("Ivan", "Ivanov", "basic");

//* Объявление классов на ES6

class ProductES {
  constructor(brand, price, descount) {
    // этот метод не обязательно объявлять если мой класс при вызове не будет принимать аргументы
    this.barnd = brand;
    this.price = price;
    this.descount = descount;
  } //! внутри метода конструктора можно объявить все свойства, которые будут доступны внутри класса

  get brand() {
    return this._brand;
  }

  set brand(name) {
    return (this._brand = name);
  }

  getPriceWithDiscount() {
    return (this.price * (100 - this.descount)) / 100;
  }

  getPrice(newPrice) {
    this.price = newPrice;
  }

  static plus(x, y) {
    //! статический метод, вызов: ProductES.plus(1, 2);
    return x + y;
  }
}

const newProduct = new ProductES("Samsung", 200, 10);

//* Наследование в ES6

class UserES {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class CustomerES extends UserES {
  //!extends - наследование
  constructor(firstName, lastName, membership) {
    super(firstName, lastName); //передаю сюда те аргументы которые принимает класс UserES
    this.membership = membership;
  }

  getFullName() {
    const parentRes = super.getFullName(); 
    return `${parentRes}, memdership: ${this.membership}`;//вызвал метод родителя, тчо бы получить базовый его функционал и дополнил собственный функционал
  }
}

const customerES = new CustomerES("Kirill", "Shestmintcev", "basic");
