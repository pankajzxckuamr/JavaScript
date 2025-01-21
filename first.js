const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function defaultTask() {
    let list = document.createElement("li");
    list.innerHTML("JavaScript Project.");
    listContainer.appendChild("list");
    let span1 = document.createElement("span");
    span1.innerHTML = "\u00d7";
    list.appendChild(span1);
}

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
    else {
        defaultTask();
    }
}
showTask();

