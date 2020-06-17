// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = "8f05740aee0a413183371f9d7793960e";
  const apiUrl = "https://news-api-v2.herokuapp.com";

  return {
    topHeadlines(country, category, cb) {
      // будет принимать страну
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,
        cb
      ); // запрос для topHeadlines
    },
    everything(query, cb) {
      //по ключевому слову
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb); // запрос для everything
    },
  };
})();

//Elements
const form = document.forms["newsControls"];
const countrySelect = form.elements["country"];
const searchInput = form.elements["search"];
const categorySelect = form.elements["category"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadNews();
});

//  init selects
document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

//load news function
function loadNews() {
  showLoader(); //вызов лоудера
  const country = countrySelect.value;
  const searchText = searchInput.value;
  const category = categorySelect.value;
  //ф-ия для запроса на сервер, на topHeadlines/everything
  if (!searchText) {
    //если в searchText пусто то поиск только по стране
    newsService.topHeadlines(country, category, onGetResponse);
  } else {
    newsService.everything(searchText, onGetResponse);
  }
}

//func on get response from server
function onGetResponse(err, res) {
  removePreloader(); //скрытие Прелоадера когда будет получен ответ от сервера

  if (err) {
    showAlert(err, "error-msg");
    return;
  }

  if (!res.articles.length) {
    showAlert("Введите корректный запрос!", "error-msg");
    return;
  }
  //получает результат с сервера
  renderNews(res.articles);
}

//func render News
function renderNews(news) {
  //ф-ия получает новость и уже с ней делает -->
  const newsContainer = document.querySelector(".news-container .row"); //определяю контейнер
  if (newsContainer.children.length) {
    clearContainer(newsContainer); //удаление новостей не по теме(ниже)
  }
  let fragment = "";

  news.forEach((newsItem) => {
    //перебор новостей
    const el = newsTemplate(newsItem);
    fragment += el; // на кождой итерации el будет конкатенироваться в переменную fragment
  });

  //добавление строки в разметку
  newsContainer.insertAdjacentHTML("afterbegin", fragment); //метод позволяет вставить html строку(НЕ DOM элемент!!!)
}

//func clear container //функционал удаления новостей не по теме поиска(ниже)
function clearContainer(container) {
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
  //*либо можно то, что выше реализовать так:
  //* container.innerHTML = '';
}

//news Item Template Function
function newsTemplate({ urlToImage, title, url, description }) {
  // деструктутирую news
  if (!urlToImage) {
    //если картинки нет, то подставлю заглушку
    return `
    <div class='col s12'>
      <div class='card'>
        <div class='card-image'>
          <img src='https://image.flaticon.com/icons/png/512/37/37543.png'>
            <span class='card-title'>${title || ""}</span>
        </div>
        <div class="card-content">
          <p>${description || ""}</p>
        </div>
        <div class='card-action'>
          <a href='${url}'>Read more</a>
        </div>
      </div>
    </div>
    `;
  }
  // формирование разметки 1 новости в виде html строки в переменную el
  else
    return `
    <div class='col s12'>
      <div class='card'>
        <div class='card-image'>
          <img src='${urlToImage}'>
            <span class='card-title'>${title || ""}</span>
        </div>
        <div class="card-content">
          <p>${description || ""}</p>
        </div>
        <div class='card-action'>
          <a href='${url}'>Read more</a>
        </div>
      </div>
    </div>
  `;
}
//функционал вызова ошибки
function showAlert(msg, type = "success") {
  //буду вызывать ошибку через MATERIALIZE
  M.toast({ html: msg, classes: type });
}

//функционал Preloader-a
function showLoader() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    `
  );
}

//ф-ия для скрытия лоадера
function removePreloader() {
  const loader = document.querySelector(".progress");
  if (loader) {
    loader.remove();
  }
}
