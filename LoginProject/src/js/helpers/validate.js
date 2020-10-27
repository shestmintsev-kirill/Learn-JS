const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/, //! регулярные выражения для проверки логина\пароля
};

/**
 * Function validate. Check Input on RegExp provided in regExpDic by input data-required type
 * @param {HTMLInputElement} el
 * @returns {Boolean} - Return true if input valid or doesn't has data-required attr
 */
export function validate(el) {
  //функция которая будет заниматься валидацией
  const regExpName = el.dataset.required; // буду получать ключ из регулярного выражения
  if (!regExpDic[regExpName]) return true; //если нету в regExpDic регулярного выражения под данный инпут то return true
  return regExpDic[regExpName].test(el.value); //иначе пользуюсь специальным методом для рег. выражения .test(принимает какую либо строку) и возращаю результат вызова этого метода
}
