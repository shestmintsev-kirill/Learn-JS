class CurrencyUI {
  constructor() {
    this.currency = document.getElementById("currency");
    this.dictionary = {
      USD: "$",
      EUR: "€",
    }; //в селекте value будет либо USD / EUR и получу нужный символ
  }

  get currencyValue() {
    return this.currency.value;
  }

  getCurrencySymbol() {
    return this.dictionary[this.currencyValue];
  }
}

const currencyUI = new CurrencyUI();
export default currencyUI;
