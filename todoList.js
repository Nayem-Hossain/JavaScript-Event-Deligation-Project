/* function addTask() {
  const task = document.querySelector("form input");
  const list = document.querySelector("ul");
  if (task.value === "") {
    alert("Please add some task!");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = ` <input type="checkbox" onclick="taskComplete(this)">
  <span>${task.value}</span>
  <i class="fa fa-trash" onclick="removeTask(this)"></i>`;

  list.insertBefore(li, list.children[0]);
  task.value = "";
}
function taskComplete(event) {
  event.nextElementSibling.classList.toggle("complete");
}
function removeTask(event) {
  event.parentElement.remove();
} */

function addTask() {
  const task = document.getElementById("input-task");
  const list = document.getElementById("task-list-container");
  if (task.value === "") {
    alert("please add a task !");
    return;
  }
  const createLi = document.createElement("li");
  createLi.innerHTML = `<input type="checkbox" onclick="taskComplete(this)">
  <span>${task.value}</span>
  <i class="fa fa-trash" onclick="removeTask(this)"></i>`;

  const insertUnder = document.getElementById("task-list-container");
 // insertUnder.appendChild(createLi);
 insertUnder.insertBefore(createLi, insertUnder.childNodes[0]);
  task.value = "";
}
function taskComplete(event) {
  event.nextElementSibling.classList.toggle("complete");
}
function removeTask(event) {
  event.parentElement.remove();
}
