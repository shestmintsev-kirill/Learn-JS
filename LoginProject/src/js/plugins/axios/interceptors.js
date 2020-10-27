const lsTokenKey = "my_app-token";

function setToken(req) {
  const isAuthUrl = req.url.includes("auth");

  if (!isAuthUrl) {
    const token = localStorage.getItem(lsTokenKey);
    req.headers["x-access-token"] = token; //таким образом я проставлю токен в любом запросе кроме аунтиндефикации
  }

  return req;
}

function setTokenOnLogin(res) {
  const isLoginUrl = res.config.url.includes("login");

  if (isLoginUrl) {
    const token = res.data.token;
    localStorage.setItem(lsTokenKey, token);
  }

  return res;
}

function getClearResponse(res) {
  return res.data; // метод что бы получать только data
}

function onError(err) {
  console.log(err);
  return Promise.reject(err);
}

export default function (axios) {
  // вызов интерсепторов
  axios.interceptors.request.use(setToken);
  axios.interceptors.response.use(setTokenOnLogin);
  axios.interceptors.response.use(getClearResponse, onError);
}
