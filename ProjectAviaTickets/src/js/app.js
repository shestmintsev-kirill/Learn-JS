import "../css/style.css";
import "./plugins";
import location from "./store/locations";
import formUI from "./views/form";
import currencyUI from "./views/currency";
import ticketsUI from "./views/tickets";

//создам единое место где буду init-ить приложение и буду вешать все обработчики
document.addEventListener("DOMContentLoaded", () => {
  initApp();
  const form = formUI.form; //получил форму из formUI

  // Events

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  //*Heandlers страртовые обработчики
  async function initApp() {
    await location.init();
    formUI.setAutoCompleateData(location.shortCitiesList);
  }

  //запрос на отправку данных из форм
  async function onFormSubmit() {
    //сбор данных из инпутов
    const origin = location.getCityByKey(formUI.originValue);
    const destination = location.getCityByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue; //значение что бы возращать в ЕВРО
    // нужный формат для отправки на сервер CODE, CODE, 2020-09, 2020-10
    await location.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
    ticketsUI.renderTickets(location.lastSearch);
  }
});
