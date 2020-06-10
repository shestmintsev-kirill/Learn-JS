const btn = document.querySelector('button');
const link = document.querySelector('a');
//! Создам обработчик событий	
btn.onclick = function() {
  console.log('click');
}; //! этим способом нельзя повесить множество обработчиков на один и тот же эл., оно будет перезаписываться (НЕЖЕЛАТЕЛЬНО)

btn.addEventListener('click', function(e) {  //!addEventListener - универвальный способ, принимает(тип события, обработчик события(принимает объект события event), эл. с настр.)
  console.log(e);
});
function clickhandler(e) {
e.preventDefault(); //!preventDefault этот способ отменяет дефолтное поведение на странице
console.log(this); //! в обычной ф-ии this это сам элемент(на который было повешено событие), в стрелочной это window
console.log(e);
}
link.addEventListener('click', clickhandler)
link.removeEventListener('click', clickhandler); //!removeEventListener удаляет обработчик, но для этого нужно вынести функцию обработч. и дать ей название (принимает назв. события, прин. название обработчика события)


//! так же можем передавать стрелочные ф-ии
btn.addEventListener('click', e => {
  console.log(this); //! в стрелочной ф-ии this это window
  console.log(e);
});

//* Дилегирование события(когда какие либо элементы я динамически добавляю на страницу)
const container = document.querySelector('.container');

btn.addEventListener('click', e => {
  const div = document.createElement('div');
  const nestedBtn = document.createElement('button');
  div.textContent = Math.random().toFixed(2) * 100;
  nestedBtn.textContent = 'button';
  div.appendChild(nestedBtn);
  container.appendChild(div);
});
//! повешу обработчик события клика на весь контейнер
container.addEventListener('click', e => {
  console.dir(e.target)
  if (e.target.tagName === 'BUTTON') {
    console.log('button clicked');
  }
});
