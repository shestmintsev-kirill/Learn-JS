function firstFunc(arr, fn) {
  let res = 'New value: ';

  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }

  return res;
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  return Number(el) * 10 + ', ';
}

console.log(firstFunc([10, 20, 30], handler2) )

function handler3(el) {
  return `${el.name} is ${el.age}, `
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
  return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));