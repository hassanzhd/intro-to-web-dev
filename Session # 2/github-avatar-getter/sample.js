// Document related attributes

// console.log(document);
// console.log(document.URL);
// console.log(document.domain);

// By ID:

// const sampleDiv = document.getElementById("sample");
// console.log(sampleDiv);
// sampleDiv.style.backgroundColor = "yellow";

// By ClassName:

// const sampleDiv = document.getElementsByClassName("primary");
// console.log(sampleDiv);
// sampleDiv[0].style.backgroundColor = "yellow";

// querySelector

//const primaryElement = document.querySelector(".primary");

// const primaryElement = document.querySelectorAll(".primary");

// const primaryElement = document.querySelector(".primary.important");

// console.log(primaryElement);

// createElement

// const newElement = document.createElement("div");
// const newElementID = document.createAttribute("id");
// newElementID.value = "sample";
// newElement.setAttributeNode(newElementID);
// newElement.appendChild(document.createTextNode("Hello world"));
// newElement.style.backgroundColor = "yellow";

// document.body.appendChild(newElement);

// const divHeading = document.querySelector(".heading");
// console.log(divHeading.parentNode);
// divHeading.innerText = "okay!";

// const divElement = document.querySelector("#sample");

// divElement.innerHTML = divElement.innerHTML += "<p>lorem ipsum hohoho</p>";

// console.log(divElement.children);
// console.log(divElement);

// const formBtn = document.querySelector("#form-btn");

// formBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("i have been clicked");
// });

// const formElement = document.querySelector("#add-heading-form");

// const createHeadingElement = (__dataValue) => {
//   const newHeading = document.createElement("h1");
//   newHeading.append(document.createTextNode(__dataValue));

//   newHeading.classList.add("important-text");

//   document.body.appendChild(newHeading);

//   localStorage.setItem("heading", __dataValue);
// };

// formElement.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const dataValue = document.querySelector("#form-input").value;
//   createHeadingElement(dataValue);
// });

// const getAllHeadings = () => {
//   const headingValue = localStorage.getItem("heading");
//   createHeadingElement(headingValue);
// };

// getAllHeadings();

// document.querySelector("#form-input").addEventListener("cut", (event) => {
//   event.preventDefault();
// });

const formElement = document.querySelector("#add-heading-form");

const getData = async (__handle) => {
  const response = await fetch(`https://api.github.com/users/${__handle}`);
  return await response.json();
};

formElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  const dataValue = document.querySelector("#form-input").value;

  const data = await getData(dataValue);

  const newImageTag = document.createElement("img");
  newImageTag.setAttribute("src", data.avatar_url);

  document.body.appendChild(newImageTag);
});
