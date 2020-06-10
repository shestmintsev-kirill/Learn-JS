const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

//самовызывающ. ф-ия для безопасности что бы в глобальную обл. не пошли переменные
(function (arrOfTasks) {
  const ObjofTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc; // на каждой итерации получу 1 задачу под ключом _id
  }, {});

  //* Elements UI
  const listContainer = document.querySelector(
    ".tasks-list-section",
    ".list-group"
  ); //Создал контейнер в который буду добавлять 'tusk'
  const form = document.forms["addTask"]; //выбрал нужную форму с страницы
  const inputTitle = form.elements["title"]; // получить доступ к элементу формы (title)
  const inputBody = form.elements["body"]; // получаю элемент (body)

  //*Events
  renderAllTasks(ObjofTasks); // вызов вывода задач на страницу
  form.addEventListener("submit", onFormSubmitHandler); //создал событие для формы (событие, обработчик)
  listContainer.addEventListener("click", onDeleteHandler); // создал событие для 'delete Task'(обработчик события на весь список, в котором генерируется задача)

  function renderAllTasks(tasksList) {
    // вывод задач на страницу
    if (!tasksList) {
      console.error("Передайте список задач!");
      return;
    }
    // фрагмент буду наполнять задачами, что бы добавить потом в общий список задач
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      // перебор, на каждой итерации будет отдельная задача в виде объекта
      const li = listItemTamplate(task); //вызов ф-ии 'listItemTamplate' на каждой итерации, внутри ф-ии 'renderAllTasks' которая вернет DOM эл. одного элемента задачи
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTamplate({ _id, title, body } = {}) {
    //ф-ия получает на вход 1 задачу, деструктурирую, и внутри этой ф-ии генерирую разметку
    const li = document.createElement("li");
    li.classList.add(
      // задам ряд классов(копирую из разметки)
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
      //!делаю для обработчика удаления -->
      li.setAttribute('data-task-id', _id) //получаем _id и сетим атрибут на 'li'//! теперь id есть в разметке и я могу получить к нему доступ


    const span = document.createElement("span"); //теперь создаю внутри 'span'
    span.textContent = title; //задаю 'title' в качестве текста
    span.style.fontWeight = "bold"; // задал жирность

    const delBtn = document.createElement("button"); // создал кнопку
    delBtn.textContent = "Delete task"; // добавил текст
    delBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn"); //задам ряд классов

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");
    // все эти 3 элемента содержаться в 'li' =>>>, для этого использяю 'appendChild' добавлю
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(article);
    //таким образоя я сформировал разметку для каждой задачи, что бы вызвать эту ф-ии я должен вернуть 'li'
    return li;
  }

  function onFormSubmitHandler(e) {
    //создал обработчик события submit
    e.preventDefault(); // что бы не перезагружать страниу
    const titleValue = inputTitle.value; //вытаскиваю значение которое было в title
    const bodyValue = inputBody.value; //вытаскиваю значение которое было в body

    //сделаю проверку
    if (!titleValue || !bodyValue) {
      alert("Пожалуйста введите значение");
      return; // и возвращаю что бы ф-ия не прекратила выполнение обработчика
    }
    //создание задачи и добавления в DOM
    //ф-ия буду вызывать из обработчика!
    const task = createNewTask(titleValue, bodyValue); //прочитал что ввел пользователь и вызвал ф-ию, которая приймет эти значения и создаст 'newTask'
    const listItem = listItemTamplate(task); //передаю один объект 'task' и он сгенерирует одну 'li' на основе этого объекта
    listContainer.insertAdjacentElement("afterbegin", listItem); //метод позволяет вставить эл.(listItem) в 1 из 4ех позиций(afterbegin)//! и добавил в начало списка задач (в разметку)
    form.reset(); //метод reset сбрасывает состояние формы(очищает поля)
  }
  //ф-ия буду вызывать из обработчика!
  function createNewTask(title, body) {
    //на основе значений() ф-ия будет создавать новый объект задач и добавлять в список Task-ов
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task - ${Math.random()}`, // буду задавать id рандомно
    }; // так я сгенерировал новый объект задачи, который можно добавить в список задач
    //! эту новую задачу добавляю в список всех Task-ов --->
    ObjofTasks[newTask._id] = newTask; //создал под новым _id в объекте, будущую задачу, и она же хранится в переменной task внутри обработчика

    return { ...newTask }; // для будущего использования возвращаю копию этой новой задачи(копию этой новой задачи получаю в переменной 'task')
  }
  //ф-ия буду вызывать из обработчика!
  function deleteTask(id) { //создал ф-ию которая принимает id задачи, которую нужно удалить
    const {title} = ObjofTasks[id]; //достал title и подставлю его в confirm ---->
    const isConfirm = confirm(`Вы хотите удалить задачу: ${title}?`); //будет спрашивать ч-з alert. После ответа будет true/false
    if (!isConfirm) return isConfirm; //если не подтвердил удаление(false) то возращаем c статусом false(return) и не делаем никаких задач
    delete ObjofTasks[id]; //если true то удаляем задачу
    return isConfirm;// и возвращаю isConfirm с статусом true
  }

  function deleteTaskFromHtml(confirmed, el) { //вынес отдельно ф-ию для удаления( для дальнейшей разработки рекомендуется)
    if (!confirmed) return; //если confirmed false то ничего не делаем
    el.remove();//если confirmed true, то удаляем
  }

  function onDeleteHandler({ target }) {
    // вытягиваю из объекта event только target
    if (target.classList.contains("delete-btn")) {
      // проверка что бы таргет был именно на кнопке "Delete task"
      const parent = target.closest('[data-task-id]') //  при клике буду искать ближайшего родителя с атрибутом 'data-task-id'
      const id = parent.dataset.taskId;// забираю id через dataset, атрибут с приставкой data
      const confirmed = deleteTask(id)//вызов ф-ии 'deleteTask', и запишу в переменную
      deleteTaskFromHtml(confirmed, parent); //вызов ф-ии удаления
    }
  }
})(tasks);
