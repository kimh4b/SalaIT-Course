const inputTask = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const remainingTasks = document.getElementById("remainingTasks");

// Update dashboard
function updateDashboard() {
    const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');

    const total = checkboxes.length;
    const completed = taskList.querySelectorAll(
        'input[type="checkbox"]:checked',
    ).length;
    const remaining = total - completed;

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    remainingTasks.textContent = remaining;
}

// Add a new task
function addTask() {
    const taskText = inputTask.value.trim();

    if (taskText === "") {
        return;
    }

    // Create elements
    const newDiv = document.createElement("div");

    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";

    const newP = document.createElement("span");
    newP.textContent = taskText;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Complete task
    newCheckbox.addEventListener("change", () => {
        newP.style.textDecoration = newCheckbox.checked
            ? "line-through"
            : "none";

        updateDashboard();
    });

    // Edit task
    editBtn.addEventListener("click", () => {
        const updatedText = prompt("Edit your task:", newP.textContent);

        if (updatedText !== null && updatedText.trim() !== "") {
            newP.textContent = updatedText.trim();
        }
    });

    // Delete task
    deleteBtn.addEventListener("click", () => {
        newDiv.remove();
        updateDashboard();
    });

    // Add elements to the page
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newP);
    newDiv.appendChild(editBtn);
    newDiv.appendChild(deleteBtn);

    taskList.appendChild(newDiv);

    // Clear input
    inputTask.value = "";

    updateDashboard();
}

// Button click
addTaskBtn.addEventListener("click", addTask);

// Allow Enter key to add task
inputTask.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

// Update counters when existing checkboxes change
taskList.addEventListener("change", updateDashboard);

// Initial dashboard
updateDashboard();
