import api from "../services/apiServeces";
import { formatDate } from "../helpers/date";

class Locations {
  constructor(api, helpers) {
    this.api = api;
    this.countries = null;
    this.cities = null;
    this.shortCitiesList = {};
    this.lastSearch = {};
    this.airlines = {};
    this.formatDate = helpers.formatDate;
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
      this.api.airlines(),
    ]);
    const [countries, cities, airlines] = response; //! отдельно нужно разделить города и страны
    this.countries = this.serializeCountries(countries); // и отдельно сохраняю страны
    this.cities = this.serializeCities(cities); //и города
    this.shortCitiesList = this.createShortCitiesList(this.cities);
    this.airlines = this.serializeAirlines(airlines);
    return response;
  }

  getCityByKey(key) {
    const city = Object.values(this.cities).find(
      (item) => item.full_name === key
    ); //Обьект с городами приобразую в массив с помощью Object.values, и find() найду нужный обьект города
    return city.code;
  }

  getCityNameByCode(code) {
    return this.cities[code].name;
  }

  getAirlineNameByCode(code) {
    return this.airlines[code] ? this.airlines[code].name : ""; //заодно проверяю, если нет кода Авиакомпании то возвращаю пустую строку
  }

  getAirlinelogoByCode(code) {
    return this.airlines[code] ? this.airlines[code].logo : ""; //заодно проверяю, если нет кода logo Авиакомпании то возвращаю пустую строку
  }

  //уже сюда будет приниматься стериализованные cities
  createShortCitiesList(cities) {
    // на каждой итерации Object.entries возращает ключ и значение от объекта [key: value] а сформировать нужно будет данные вида: {'City, Country': null}
    //Object.entries => [key: value]
    return Object.entries(cities).reduce((acc, [, city]) => {
      acc[city.full_name] = null;
      return acc;
    }, {});
  }

  //Преобразование формата для стран
  serializeAirlines(airlines) {
    return airlines.reduce((acc, item) => {
      item.logo = `http://pics.avs.io/200/200/${item.code}.png`; //будет добавляться в инормацию лого авиакомпании
      item.name = item.name || item.name_translations.en; //если не будет Имени Авиакомпании на русском, то будет подставляться name_translations
      acc[item.code] = item;
      return acc;
    }, {});
  }

  //* преобразовываю формат для стран
  serializeCountries(countries) {
    //я должен преобразовать его с формат: {'Код страны': {объект описывающй страну} } //!для этого формата нужен метод reduce
    return countries.reduce((acc, country) => {
      acc[country.code] = country; //в новый обьект закидываю под ключем кода страны ее обьект и возвращаю этот аккумулятор
      return acc;
    }, {});
  }
  //* преобразовываю формат для городов
  serializeCities(cities) {
    //нужно получить формат: { 'Название города, Название страны': {тело города} }
    return cities.reduce((acc, city) => {
      //на каждой итерации нужно получить название страны к которой привязан этот город
      const country_name = this.countries[city.country_code].name;
      city.name = city.name || city.name_translations.en; //это в случае если название города только на англ языке
      const full_name = `${city.name}, ${country_name}`;
      acc[city.code] = {
        ...city,
        country_name,
        full_name,
      };
      return acc;
    }, {});
  }

  async fetchTickets(params) {
    const response = await this.api.prices(params);
    this.lastSearch = this.serializeTickets(response.data);
  }

  serializeTickets(tickets) {
    return Object.values(tickets).map((ticket) => {
      return {
        ...ticket,
        origin_name: this.getCityNameByCode(ticket.origin),
        destination_name: this.getCityNameByCode(ticket.destination),
        airline_logo: this.getAirlinelogoByCode(ticket.airline),
        airline_name: this.getAirlineNameByCode(ticket.airline),
        departure_at: this.formatDate(ticket.departure_at, "dd MMM yyyy hh:mm"), //документация date-fns
        return_at: this.formatDate(ticket.return_at, "dd MMM yyyy hh:mm"),
      };
    });
  }
}

const location = new Locations(api, { formatDate });

export default location;
