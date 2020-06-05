const div = document.querySelector('div'); //!возвращает 1ый указанный элемент 
const titles = document.querySelectorAll('h1');
const h1 = document.getElementsByTagName('h1');
console.dir(h1);
console.log(titles);
console.log(Array.from(titles));
console.log(Array.prototype.slice.call(titles));
console.log([...titles]);
