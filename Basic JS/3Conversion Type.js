let value;

// Number to string
value = String(10); //! явные преобразования
value = String(10+40);
value = (40).toString();

// Boolean to string
value = String(false);
// Array to string
value = String([1, 2, 3]);
// Object to string
value = String({ name: 'Denis' });

value = 30 + '' + undefined; //!неявные преобразования
value = 30 * '5';
value = false + undefined;

// String to number
value = Number('23');
value = Number(false);
value = Number(null);
value = Number('false');
value = Number([1,2,3]);

value = parseInt('200px'); //преобразование для целых чисел
value = parseFloat('200.212px'); //преобразование для дробных чисел

// Boolean
value = Boolean('hello');
value = Boolean('');
value = Boolean(-100);
value = Boolean(0);
value = Boolean(undefined);
value = Boolean(null);
value = Boolean({});
value = Boolean([]);

console.log(value);
console.log(typeof value);