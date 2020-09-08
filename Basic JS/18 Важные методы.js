//! копирование
let obj1 = {
  name: 'Denis',
  info: {
    skills: ['html', 'css'],
  },
};

let obj2 = {
  name: 'Ivan',
  age: 20,
};
//! поверхностное копирование
let newObj = Object.assign({}, obj2, obj1); //! 1ый метод копирования-Object.assign (таргет(в этом случае новый обьект), объекты которые хочу скопировать,...) изменение newObj не приведет к изменению obj1!!! Одинаковые значения будут заменяться в последовательности копирования
let newObj = Object.assign({obj1, obj2}) //!этот метод может совместить общие свойства, и добавить новые, в этой случ. он заменит ключ name
newObj = Object.assign({}, obj1); //! если есть вложенные обьекты в копировании то будет создаваться только ссылка!!!
//! что следать Глубокое копирование нужно:
newObj = JSON.parse(JSON.stringify(obj1));//! переводим obj1 в формат JSON c помощью JSON.stringify и затем  распарсит с помощью JSON.parse
// console.log(newObj.info === obj1.info);

//! метод Object.keys вернет Ключи обьекта в виде массива, принимает (обьект)
let keys = Object.keys(obj2);
console.log(keys);
//! метод Object.values вернет Значения ключей в сиде массива, принимает (обьект)
let values = Object.values(obj2);
console.log(values);
//! метод Object.entries возвращает массив массивов, где каждым элементом является пара Ключ и Значение объекта, принимает (обьект)
let entries = Object.entries(obj2);
console.log(entries);
//! метод Object.fromEntries обратный Object.entries возвращает объект из массивов Ключ:Значение , принимает ([Ключ: значение])
let fromEntries = Object.fromEntries([['a', 'value'], ['b', 'b_value']]);
console.log(fromEntries);
