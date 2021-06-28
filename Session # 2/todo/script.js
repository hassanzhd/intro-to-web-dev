const formElement = document.querySelector(".add-todo-form");
const containerElement = document.querySelector(".container");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputElement = document.getElementById("todoInput");

  const newElement = document.createElement("div");
  newElement.className = "todo";
  const newElementParagraph = document.createElement("p");
  newElementParagraph.append(document.createTextNode(inputElement.value));

  const newElementButton = document.createElement("button");
  newElementButton.className = "delete-btn";
  newElementButton.append(document.createTextNode("Delete"));

  newElement.appendChild(newElementParagraph);
  newElement.appendChild(newElementButton);

  containerElement.append(newElement);
});

containerElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const todoElement = event.target.parentElement;
    containerElement.removeChild(todoElement);
  }
});
