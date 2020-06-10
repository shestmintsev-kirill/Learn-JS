const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');

btn.addEventListener('click', e => {
  // e.stopPropagation(); //! прекращает всплытие события, событие отработает только 1 раз на кнопке
  console.log('click btn');
});

wrap.addEventListener('click', e => {
  console.log('click wrap');
});

document.body.addEventListener('click', e => {
  console.log('click body');
});//!происходит всплытие, если у родителя есть обработчик такого же события, то оно произойдет и на родителе


//! обработчики которые реагируют на погружение
wrap.addEventListener(
  'click',
  e => {
    console.log('click wrap');
  },
  { capture: true },
);

document.body.addEventListener(
  'click',
  e => {
    console.log('click body');
  },
  { capture: true },
);
//! событие сначала погрузиться до элемента на котором событие, затем всплывет
