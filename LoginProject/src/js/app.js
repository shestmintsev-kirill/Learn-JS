import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";
import UI from "./config/ui.config";
import { validate } from "./helpers/validate";
import { showInputError, removeInputError } from "./views/form";
import { login } from "./services/auth.sirvice";
import { notify } from "./views/notification";
import { getNews } from "./services/news.service";

const { form, inputEmail, inputPassword } = UI; //Деструктуризация, достану из UI данные формы
const inputs = [inputEmail, inputPassword]; //инпуты предварительно соберу в массик, потому что я должен буду удалять сообщение об ошибке при фокусировке на инпут
//Event
form.addEventListener("submit", (e) => {
  e.preventDefault(); //прекращаю стандартное действие формы
  onSubmit();
});

inputs.forEach((el) =>
  el.addEventListener("focus", () => removeInputError(el))
); //прохожусь по всем инпутам, на каждой итерации получаю отдельный эл. инпута, на этот эл. вешаю addEventListener на событие focus, и в качестве обработчика делаю стрелочную функцию которая вызовет removeInputError и передаст туда el, относительно которого нужно удалить ошибку.

// создам обработчик
async function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el); //если инпут не валиден то вызываю showInputError и таким образом выведу ошибку
    }
    return isValidInput; //! таким образом если хотя бы один инпут не валиден, метод every вернет folse, таким образом я скажу что форман е валидна, если true, то every вернет так же тру и буду считать что форма валидна
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset(); // после запроса сделать reset что бы сбросить данные
    //show success notify
    notify({ msg: "Login success", className: "alert-success" });
  } catch (err) {
    //show error notify
    notify({ msg: "Login faild", className: "alert-danger" });
  }
}

// setTimeout(
//   () => notify({ mas: "Some notification 1", className: "alert-danger" }),
//   500
// );
// setTimeout(
//   () => notify({ mas: "Some notification 2", className: "alert-warning" }),
//   1000
// );
// setTimeout(
//   () => notify({ mas: "Some notification 3", className: "alert-primary" }),
//   1500
// );
