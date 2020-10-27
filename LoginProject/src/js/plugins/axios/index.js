import axios from "axios";
import API_ENV from "../../config/api.config";
import interceptors from "./interceptors";

const instance = axios.create({
  baseURL: API_ENV.apiUrl, //теперь в каждый сервис не нужно импортировать этот конфиг и подставлять адрес сервера, он теперь будет подставляться по умолчанию
  headers: {
    "Content-Type": "application/json",
  },
});

interceptors(instance);

export default instance;
