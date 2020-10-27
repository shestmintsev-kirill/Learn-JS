/**
 *  ф-ия которая будет генерировать Template
 * @param {String} msg
 */
function inputErrorTemplate(msg) {
  return `
	<div class = 'invalid-feedback'>${msg}</div>
	`; //!class = 'invalid-feedback - с документации Bootstrap
}

/**
 * ф-ия вывода ошибки
 * @param {HTMLInputElement} el
 */
export function showInputError(el) {
  const parent = el.parentElement; //ищу ближайшего родителя
  const msg = el.dataset.invalidMessage || "invalid input"; //беру у инпута сообщение
  const template = inputErrorTemplate(msg); //вызываю шаблон
  el.classList.add("is-invalid"); //на элемент добавляет класс 'is-invalid' - так же Bootstrap
  parent.insertAdjacentHTML("beforeend", template); // в parent добавляю шаблон    beforeend - в конец
}
/**
 * ф-ия удаления сообщения об ошибке
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
  const parent = el.parentElement; //ищу ближайшего родителя
  const err = parent.querySelector(".invalid-feedback"); // в нем буду искать ошибку ( эл. invalid-feedback)
  if (!err) return;

	el.classList.remove("is-invalid"); //удаляю у него класс is-invalid
	parent.removeChild(err) // из parent удаляю removeChild ошибки
}
