let counter = 0;
const addBtn = document.querySelector("#Addbtn");
const deleteBtn = document.querySelector("#delete-btn");
let ul = document.querySelector("#list");
const items = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];

const addBtnFn = () => {
  if (counter < items.length) {
    let list = document.createElement("li");
    list.innerText = items[counter];
    ul.appendChild(list);
    counter++;
  } else {
    alert("All items have been added!");
  }
};

const deleteBtnFn = () => {
  ul.removeChild(ul.lastChild);
  counter--;
};

addBtn.addEventListener("click", addBtnFn);
deleteBtn.addEventListener("click", deleteBtnFn);
