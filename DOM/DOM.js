//! это команды для nodeList - не живая коллекция(снимок)
const div = document.querySelector('div'); //!возвращает 1ый указанный элемент 
const titles = document.querySelectorAll('h1');//! получить все элементы по указанному селектору
//! этот h1 уже будет HTLM collection - живые коллекции которые будут изменяться в DOM
const h1 = document.getElementsByTagName('h1');
console.dir(h1);
console.log(titles);
console.log(Array.from(titles));//!
console.log(Array.prototype.slice.call(titles));
console.log([...titles]);//! получить коллекцию в виде массива


div. //! вернет следущий узел после этого div(текст)
div.nextElementSibling //! вернет след. элемент Тег
div.firstChild //! первый текстовый узел, который находится внутри div
div.firstElementChild //! первый дочерний элемент
div.parentElement //! родительский элемент div

document.body //! получу полностью тело документа body
document.links //! получу тело всех ссылок которые есть на странице
document.forms //! получу все формы которые есть на странице
document.body.children; //!все дочерние элементы body

//! BOM - глобальные элементы, которые предоставляет браузер, это окружение которые дают возможность из JS взаимодействовать с браузером
// например
window;
navigator;
location
 //* Атрибуты элементов
const link = div.querySelector('.link');
// console.log(link.parentElement);
// console.log(link.closest('.content'));

div.classList.add('article', 'custom'); //!добавить div class (добавить любое кол-во class)
div.classList.remove('article'); //! можно удалять классы
div.classList.contains('custom'); //! вернет Булевое, есть ли этот class у элемента
div.classList.toggle("toggle")//! позволяет переключать class, если class нет, то он будет добавлен, если class есть, то он будет удален.
div.className //! получу в виде строки все class-ы которые содержатся в элементе
// console.dir(link);

div.setAttribute('id', 'myId'); //! (принимает название атрибута и его значение), 
div.removeAttribute("id") //! удаление атрибута
div.getAttribute("id") //! получить значение атрибута
div.hasAttribute("id") //! наличие атрибута

div.dataset.myattr //! считывание своего кастомного атрибута, можно перезаписать


// *Манипуляция DOM
const title = document.querySelector('h1'); //! выбрали элемент h1
title.innerHTML = '<span>text</span>'; //! так внутрь h1 дабвил тег span и тд(не желательно)
title.textContent = '<span>new text</span>';//! св-во позволяет менять текстовое содержимое, Теги тут будут записаны как текст
// title.appendChild('<span>appen</span>');
title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');//! (принимает первым аргументом позицию(всего 4 позиции) и то, что вставить)
title.insertAdjacentElement//! позволяет вставлять Node узлы

title.innerHTML += '<span>new text</span>';	
const span = title.querySelector('span');
console.log(span);
title.innerHTML += '<span>new text2</span>';
span.innerHTML = 'asdasd'; //!innerHTML опасен, т.к. он удаляет ссылки на объект

// *Создание элемента
const span = document.createElement('span');//! метод для создания эл. (принимает тег который хочу создать)(создает только внутри JS)
span.textContent = 'span created by createElement'; //! можно к span применять методы и св-во как к DOM эл. (создал текст. содержимое)
span.classList.add('myClass'); //! добавил class
//! но его еще не будет в РАЗМЕТКЕ!
console.log(span);
title.appendChild(span);//! метод которым я добавлю его в разметку
div.appendChild(span);// если я его добавил сначала в title, а потом в div, то из title он удалится, а в div добавится.//!этот span может быть только в 1-ом экземпляре

const fragment = document.createDocumentFragment();//! создал фрагмент, это DOM узел, могу внять добавлять эл. ....
const colors = ['black', 'yellow', 'orange'];
colors.forEach(color => { //! создам на каждой итерации новый item
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`); //! добавил ему class
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item); //! добавил этот item в Фрагмент
});
document.body.appendChild(fragment); //! и теперь я добавил в разметку

// *Удаление элементов
title.remove() //! удаляет элемент с страницы
title.parentElement.removeChild(title)//! старый способ
