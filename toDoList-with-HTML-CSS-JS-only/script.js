const toDosStore = [];

const createToDoItem = toDo => {
  const toDoItemLi = document.createElement('li');

  toDoItemLi.id = toDo.id;
  toDoItemLi.innerHTML = toDo.toDoTitle;
  toDoItemLi.className = toDo.conclued ? 'is-conclued' : '';
  toDoItemLi.addEventListener('click', editToDoList);

  return toDoItemLi;
};

const renderToDo = toDos => {
  const ul = document.querySelector('ul#list');
  ul.innerHTML = '';

  toDos.forEach(toDo => {
    const toDoItem = createToDoItem(toDo);
    ul.appendChild(toDoItem);
  });
};

const addToDo = event => {
  event.preventDefault();

  const { target: form } = event;
  const { value: toDoTitle } = form.todo;

  form.reset();

  toDosStore.push({
    id: new Date().getTime(),
    toDoTitle,
    conclued: false
  });
  
  renderToDo(toDosStore);
};

const editToDoList = event => {
  const toDoIndex = toDosStore.findIndex(toDo => toDo.id == event.target.id);

  if(toDosStore[toDoIndex].conclued) {
    setTimeout(() => {
      toDosStore.splice(toDoIndex, 1); // remover | apos .3 segundos
      renderToDo(toDosStore);
    }, 300);
  } else {
    toDosStore[toDoIndex].conclued = true; // marcar como concluído
    renderToDo(toDosStore);
  }
};

document.forms[0].addEventListener('submit', addToDo);
