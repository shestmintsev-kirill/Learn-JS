
(function(msg) { //! <-- инкапсуляция кода
  console.log(msg);
  function sayHello(firstName = "Default", lastName = "Default") {
    console.log(firstName, lastName);
    console.log("Hello world");
    return `Hello ${firstName} ${lastName}`; //!обязательно нужно возвращать  
  }
  
  // let res = sayHello("Denis", "Mescheryakov");
  // let res2 = sayHello("Dima", "Mescheryakov") + "!";
  // let res3 = sayHello();
  // console.log(res3);
  
  // let x = 10;
  
  // function foo(x) {
  //   x = 20;
  //   console.log(x);
  //   return x;
  // }
  
  // foo();
  
  // console.log(x);
  
  // const user = {
  //   name: "Denis",
  //   age: 30
  // };
  
  // function getObj(obj) {
  //   obj.name = "Den";
  // }
  
  // getObj(user);
  // console.log(user);
  
  const square = function(x) {
    return x * x;
  };
})("Hello world");
//! через arguments берутся все заданные аргументы функции