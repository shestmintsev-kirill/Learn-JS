// //! по умолчания fetch делает GET запрос и возращает Promise в котором я получу объект ответа//
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => {  //! в первом then я получу объект ответа от сервера
// 	return response.json(); //!вызываем один из методов для работы с объектом с которым необходимо работать
// })
// .then(posts => console.log(posts)) //! и на следующем then я получу тело ответа от сервера
// .catch(err => console.log(err));

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}

getPost(1).then((post) => console.log(post));

//! можно упростить записать выше

function getPost2(id) {
  const [userType, userId] = id.split("-"); //я разбил 'user-1' на 2 части [userType, userId]
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`
  ).then((response) => response.json());
}

getPost2("user-1")
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

//!_____________________________________________
//! за счет того что есть обертка Promise.resolve вызвав ф-ию
function getPost3(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split("-"); //я разбил 'user-1' на 2 части [userType, userId]
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    ).then((response) => response.json());
  });
}

getPost3("user-1")
  .then((post) => console.log(post))
  .catch((err) => console.log(err));