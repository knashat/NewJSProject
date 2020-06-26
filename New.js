const button = document.querySelector("#Add-todo");
const button2 = document.querySelector("#Delete-todo");
const button3 = document.querySelector("#cancel");
const container = document.querySelector("#container");
const inputField = document.querySelector("#task-name");

let todos = [];
let time;

button2.addEventListener("click", function(myEvent) {
  myEvent.stopPropagation();

  if (todos[0] !== undefined) {
    button2.classList = "button-styles2";
    button2.innerHTML = "Click Cancel to undo in 10 seconds!";

    time = setTimeout(() => {
      const lastItem = todos[todos.length - 1];
      const newTodos = todos.filter(todo => todo !== lastItem);
      todos = newTodos;
      renderTodos();
      button2.classList = "button-styles";
      button2.innerHTML = "Delete todo";
    }, 5000);
  }
});

/*button2.addEventListener("click", function(e) {
  e.stopPropagation();
  if (time) {
    clearTimeout(time);
    time = 0;
  }
}); */

button3.addEventListener("click", function(myEvent) {
  myEvent.stopPropagation();
  if (time) {
    clearTimeout(time);
    button2.classList = "button-styles";
    button2.innerHTML = "Delete todo";
  }
});

const renderTodos = () => {
  container.innerHTML = "";
  todos.forEach(todo => {
    const listItem = document.createElement("li");
    listItem.innerHTML = todo;
    container.appendChild(listItem);
  });
};

button.addEventListener("click", function(myEvent) {
  myEvent.stopPropagation();
  const taskName = inputField.value;
  todos.push(taskName);
  renderTodos();
  inputField.value = "";
});
