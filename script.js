const user_Input = document.getElementById("userInput");
const list_container = document.getElementById("list-container");

//Function to handle task
function addTask() {
    if (user_Input.value === '') {
        alert("You must enter a task!!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = user_Input.value;

        let deleteSymbol = document.createElement("span");
        deleteSymbol.innerHTML = "\u00d7";
        deleteSymbol.className = "delete-symbol";
        deleteSymbol.addEventListener("click", function () {
            deleteTask(li);
        });

        // Add a checkbox to the li element
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            toggleTaskCompletion(li);
        });

        //add as a list element

        li.appendChild(checkbox);
        li.appendChild(deleteSymbol);
        list_container.appendChild(li);
    }

    user_Input.value = ""; //Clear the input field
}

//Function to delete task
function deleteTask(task) {
    task.remove();
}

function toggleTaskCompletion(task) {
    // Add or remove "checked" class to the task
    task.classList.toggle("checked");
    
    // Check if the checkbox is checked
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {

        // If checkbox is checked , apply line-through style in css
        task.style.textDecoration = "line-through";
        task.style.textDecorationColor = "rgba(255, 255, 45, 0.87)"; 
        task.style.textDecorationThickness = "0.2em"; // To adjust Thickness of the line through
    } else {
        // If unchecked, remove line-through style
        task.style.textDecoration = "none";
    }
}

// Function to display current Date and Time 
function displayCurrentTime() {
    const now = new Date();
    
    const currentDate = now.toLocaleDateString()
    const currentTime = now.toLocaleTimeString();
    document.getElementById("displayDate").innerHTML = currentDate; 
    document.getElementById("displayTime").innerHTML = currentTime; 
}
displayCurrentTime();

// set up setInterval to call the function every 1000 milliseconds (1 second)
setInterval(displayCurrentTime, 1000);
