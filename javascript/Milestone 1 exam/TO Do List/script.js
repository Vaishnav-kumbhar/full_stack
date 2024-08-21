let taskLIst = document.getElementById("task-list");
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
  let userTask = document.getElementById("task").value;
  if (userTask.value === "") {
    alert("Please add your task");
  } else {
    let list = document.createElement("li");
    list.innerText = userTask.value;
    taskLIst.appendChild(list);
    userTask.value = "";
  }
});

// it's not completed project
