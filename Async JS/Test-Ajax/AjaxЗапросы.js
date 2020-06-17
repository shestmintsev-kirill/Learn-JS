//*Тренеровка запросов к серверу    https://jsonplaceholder.typicode.com/ - тестовые запросы

const btn = document.querySelector(".btn-get-posts");
const btnAddPost = document.querySelector(".btn-add-post");
const container = document.querySelector(".container");

function getPost(cb) {
  //! ф-ия после вызова должна возвращать ответ от сервера
  const xhr = new XMLHttpRequest(); // создал экземпляр и получил методы
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); //метод принимает (метод запроса, url адрес), метод 'open' не отправляет запрос, он только его настраивает

  //подписаться на событие получения данный от сервера -->
  xhr.addEventListener("load", () => {
    // 'load' - это событие когда данные успешно получены от сервера
    const response = JSON.parse(xhr.responseText); //xhr.responseText  хранит ответ от сервера, распарсил формат JSON
    cb(response); // ф-ия callback которая получит все ф-ии ответ от сервера
  });

  xhr.addEventListener("error", () => {
    //обработка ошибок
    console.log("error"); // это событие будет срабатывать если общение с сервером неуспешно
  });

  xhr.send(); //метод принимает тело запроса (сейчас просто получить данные  от сервера) для отправки запроса
}

//* ф-ия для Post запроса
function createPost(body, cb) {
  //принимает тело запроса и Callback который я хочу вызвать после ответа сервера
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.addEventListener("error", () => {
    console.log("error");
  });
  xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = post.title; // предварительно запишу title из 'post'
  const article = document.createElement("p");
  article.classList.add("card-text");
  article.textContent = post.body;
  cardBody.appendChild(title);
  cardBody.appendChild(article);
  card.appendChild(cardBody);
  return card;
}

function renderPost(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = cardTemplate(post);
    fragment.appendChild(card); //! теперь это готовый фрагмент который можно добавить в контейнер
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getPost(renderPost);
});

btnAddPost.addEventListener("click", (e) => {
  const newPost = {
    id: 1,
    title: "ASDsadfsa",
    body: "asdsdfas",
    userId: 1,
  };
  createPost(newPost, (response) => {
    const card = cardTemplate(response);
    container.insertAdjacentElement("afterbegin", card); //можно и appenChild
  });
});

//* Обработка ошибок для GET запроса
function myHttpRequest({ method, url } = {}, cb) {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url); //вместо GET - method, вместо ссылки - url
    xhr.addEventListener("load", () => {
      if (Math.floor(xhr.status / 100) !== 2) {
        //обработка асинхронных ошибок если статус не равен 200/201.. то он не успешный
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
}

// myHttpRequest(
//   { method: "GET", url: "https://jsonplaceholder.typicode.com/posts" },
//   (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(res); //есть cb будет null, то выполнится только эта часть
//   }
// );


//* ошибки и их отладка
function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url); //вместо GET - method, вместо ссылки - url
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            //обработка асинхронных ошибок если статус не равен 200/201.. то он не успешный
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
        xhr.open("POST", url); //вместо GET - method, вместо ссылки - url
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            //обработка асинхронных ошибок если статус не равен 200/201.. то он не успешный
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
            xhr.setRequestHeader(key, value); //задал заголовки при запросе
          })
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

const myHttp = http();

myHttp.post(
  "https://jsonplaceholder.typicode.com/posts",
  {
    id: 1,
    title: "ASD",
    body: "asd",
    userId: 1,
  },
  { "Content-type": "application/json" },
  (err, res) => {
    console.log(err, res);
  }
);
