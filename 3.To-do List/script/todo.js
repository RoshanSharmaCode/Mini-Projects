const index = document.querySelector('.input');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const date = document.querySelector('.mydate');

window.addEventListener('DOMContentLoaded', () => {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => createTask(task.text, task.date));
});

btn.addEventListener('click', () => {
  let indexValue = index.value;
  let seletedDate = date.value;

  if (indexValue === "") return;

  createTask(indexValue, seletedDate);
  saveTask(indexValue, seletedDate);

  index.value = '';
  date.value = '';
});

function createTask(text, dateValue) {
  const paraRow = document.createElement('div');
  paraRow.classList.add('para-row');

  const newPara = document.createElement('p');
  newPara.classList.add('created-para');
  newPara.textContent = text;

  const datePara = document.createElement('p');
  datePara.classList.add('date-para');
  datePara.textContent = dateValue;

  const newBtn = document.createElement('button');
  newBtn.textContent = 'Remove';
  newBtn.classList.add('delete-btn');

  newBtn.addEventListener('click', () => {
    paraRow.remove();
    removeTask(text, dateValue);
  });

  paraRow.appendChild(newPara);
  paraRow.appendChild(datePara);
  paraRow.appendChild(newBtn);

  container.appendChild(paraRow);
}

function saveTask(text, dateValue) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ text, date: dateValue });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(text, dateValue) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task.text !== text || task.date !== dateValue);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
