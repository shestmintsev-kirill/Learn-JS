function getPost(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split("-"); //я разбил 'user-1' на 2 части [userType, userId]
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    ).then((response) => response.json());
  });
}

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
  //можно короче записать то что выше и без переменной: return response.json();
}

getPost(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//! так же можно использовать try catch

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return Promise.reject(); //либо throw error
  }
}

getPost(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//! если несколько ф-ий
async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
  console.log(res1, res2);
}
getAll();
