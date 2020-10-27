import {
  getAutocompleteInstance,
  getDatepickerInstance,
} from "../plugins/matherialize";

class FormUI {
  constructor(autocompleteInstance, autoPickerInstance) {
    this._form = document.forms["locationControls"];
    //сами элементы которые есть на странице
    this.origin = document.getElementById("autocomplete-origin");
    this.destination = document.getElementById("autocomplete-Destination");
    this.depart = document.getElementById("datepicker-depart");
    this.return = document.getElementById("datepicker-return");
    //и есть инстансы из матириала, что бы вызвать у них какие либо отдельные методы
    this.originAutocomplete = autocompleteInstance(this.origin);
    this.destinationAutocomplete = autocompleteInstance(this.destination);
    this.departDatepicker = autoPickerInstance(this.depart);
    this.returnDatepicker = autoPickerInstance(this.return);
  }

  //гетер для получения формы
  get form() {
    return this._form; //для того что бы можно было использовать эту форму в app.js и применять к ней addEventListener и слушать событие submit
  }
  //* отдельные св-ва которые будут возращать данные из полей форм
  get originValue() {
    return this.origin.value;
  }

  get destinationValue() {
    return this.destination.value;
  }

  get departDateValue() {
    return this.departDatepicker.toString();
	}
	
	get returnDateValue() {
    return this.returnDatepicker.toString();
  }

  //метод который будет принимать дату, и дата будет устанавливаться в оба автокомплита
  setAutoCompleateData(data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUI(getAutocompleteInstance, getDatepickerInstance);

export default formUI;
