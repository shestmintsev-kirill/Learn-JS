const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;
const str = 'Hello my name is Denis';

let value;

value = firstName + lastName; // это конкатенация
value = firstName + ' ' + lastName;
value += ' I am ' + age; // более короткая запись =value + ''+...

value = firstName.length; //это св-во возращает длинну строки
value = firstName[2]; // указание определенного индекса в строке
value = firstName[4];
value = lastName[lastName.length - 1];//получение последнего элемента из строки
value = firstName[firstName.length - 1];

value = firstName.toUpperCase(); //метод возводит строку в Верхний регистр, метод для нижнего регистра - toLowerCase()
value = firstName.concat(' ', lastName);// конкатенация строк

value = str.indexOf('n', 10); // ищет первое вхождение 'n'/ ищет с 10 позиции
value = str.indexOf('!');// если обьект не найден то возвращает: -1
value = str.includes('DENIS');//вернет Булевое значение, есть ли этот обьект в строке
value = str.substr(5, 4); //возвращает строку с 5го символа длинной 4 буквы	
value = str.slice(0, 5);//вырезает с нач. индекса по последний инд./если не задать индекс, вернеться полная строка, если 1 инд. то вернет полную строку начиная с этого индекса.
value = str.slice(0, -3);//может вирезать -3 символа с конца строки

value = str.replace('Denis', 'Den');//позволяет заменить значение в строке. 1-значение которое ищем, 2-значение на которое заменяем


console.log(value);