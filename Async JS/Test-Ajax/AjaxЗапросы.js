//*Тренеровка запросов к серверу    https://jsonplaceholder.typicode.com/ - тестовые запросы

const btn = document.querySelector("button");
const container = document.querySelector(".container");

function getPost(cb) {
  //! ф-ия после вызова должна возвращать ответ от сервера
  const xhr = new XMLHttpRequest(); // создал экземпляр и получил методы
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); //метод принимает (метод запроса, url адрес), метод 'open' не отправляет запрос, он только его настраивает

  //подписаться на событие получения данный от сервера -->
  xhr.addEventListener("load", () => {    // 'load' - это событие когда данные успешно получены от сервера
    const response = JSON.parse(xhr.responseText); //xhr.responseText  хранит ответ от сервера, распарсил формат JSON
    cb(response); // ф-ия callback которая получит все ф-ии ответ от сервера
  });

  xhr.addEventListener("error", () => {    //обработка ошибок
    console.log("error");    // это событие будет срабатывать если общение с сервером неуспешно
  });

  xhr.send(); //метод принимает тело запроса (сейчас просто получить данные  от сервера) для отправки запроса
}

function renderPost(response) {
      const fragment = document.createDocumentFragment();
      response.forEach((post) => {
        //перебор массива, на каждой итерации создам отдельный пост
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
        fragment.appendChild(card); //! теперь это готовый фрагмент который можно добавить в контейнер
});
container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getPost(renderPost)
});
