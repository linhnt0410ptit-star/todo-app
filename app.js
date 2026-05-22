function addTask(){

    let taskInput = document.getElementById("taskInput");

    let taskValue = taskInput.value;

    if(taskValue === ""){
        alert("Vui lòng nhập công việc");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");

    li.innerText = taskValue;

    taskList.appendChild(li);

    taskInput.value = "";
}