const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}



// Event listener to add task when Enter key is pressed
inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});



listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }


}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();




// Get the theme switch element
const darkModeSwitch = document.getElementById("dark-mode-switch");
const body = document.body;
const container = document.querySelector(".container");
const todoApp = document.querySelector(".todo-app");
const button = document.querySelector("button");
const listItems = document.querySelectorAll("ul li");

// Function to toggle dark mode based on switch
function toggleDarkMode() {
    // Add or remove dark mode class on all elements
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    todoApp.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    listItems.forEach((item) => {
        item.classList.toggle("dark-mode");
    });

    // Save user's dark mode preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Check for user's theme preference on page load
window.onload = () => {
    if (localStorage.getItem("darkMode") === "enabled") {
        // Enable dark mode
        body.classList.add("dark-mode");
        container.classList.add("dark-mode");
        todoApp.classList.add("dark-mode");
        button.classList.add("dark-mode");
        listItems.forEach((item) => {
            item.classList.add("dark-mode");
        });
        darkModeSwitch.checked = true; // Set the switch to "checked"
    }
};

// Event listener for the switch
darkModeSwitch.addEventListener("change", toggleDarkMode);
