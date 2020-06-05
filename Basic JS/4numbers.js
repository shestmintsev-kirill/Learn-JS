// Numbers
const num1 = 10;
const num2 = 20;
let value;

// + * / - %
value = num1 + num2;
value = value + 100;
value += 100; // эквавалентно к верхней записи, более короткая
// value = 5 % 2; - определяет остаток от деления, <- этот случай: 1
value++; // енкримент
value--; // декримент (тут на след. строке)
++value; // (тут изменения произойдут на этой же строке)
--value;

value = 0.6 + 0.7; // неточные вычисления/ не равен 1.3. Исправить ->
//! value = parseFloat(value.toFixed(1));   либо ->
value = (0.6 * 10 + 0.7 * 10) / 10;

// Math  -набор свойств и методов для работы с числами
value = Math.PI;
value = Math.random(); // рандомное число от 0-1
value = Math.round(2.4); //округляет число
value = Math.ceil(2.1); // округляет в большую сторону
value = Math.floor(2.9); // округляет в меньшую сторону
value = Math.min(2, 12, 15, 0, 12); // вернет минимальное число

value = Math.floor(Math.random() * 10 + 1); //рандомное число от 0-10 включительно, округляемое в меньшую сторону

const arr = [
  "black",
  "red",
  "yellow",
  "pink",
  "white",
  "blue",
  "orange",
  "green",
];
value = Math.floor(Math.random() * arr.length); //рандом из массива

console.log(value, arr[value]);
