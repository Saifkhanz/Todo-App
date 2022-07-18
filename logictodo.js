var counter = 0;
var comp = 0;

var tasks = [];
// This function add task
function addTask() {
  document.getElementById("error").innerHTML = "";

  let newTask = document.getElementById("NewTask");

  if (newTask.value == "") {
    document.getElementById("error").innerHTML = "Please Enter the task";
  } else {
    tasks.push({
      name: newTask.value,
      isCompeleted: false,
    });
    counter++;
    document.getElementById("TaskTotal").innerHTML = counter;
    newTask.value = "";

    renderTasks();
  }
}
// this function is render the task
function renderTasks() {
  let TaskListContainer = document.getElementById("TaskList");
  TaskListContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    var new_row = document.createElement("tr");
    new_row.className = "task";
    new_row.insertCell(0).innerHTML =
      "<input type='checkbox' onclick='completedTask(this)' name='checkbox'>";
    new_row.insertCell(1).innerHTML = task.name;
    new_row.insertCell(2).innerHTML =
      '<a href="javascript:void(0)" onclick="deleteTask(' +
      index +
      ')" class="fa-solid fa-trash">Delete</a>';
    new_row.insertCell(3).innerHTML =
      "<button onclik='editTask(task)'name='edit'>EDIT";
    TaskListContainer.appendChild(new_row);
    //getTotal();
  });
}

function editTask(tasksId) {
  TaskListContainer.innerHTM = task[tasksId];
}

function completedTask(e) {
  var check = e.checked;
  console.log(check);
  let tr = e.parentNode.parentNode;
  if (check) {
    tr.classList.add("completed");
  } else {
    tr.classList.remove("completed");
  }

  getTotalCompletedTask();
}

function getTotalCompletedTask() {
  var rowCount = document.querySelectorAll("#TaskList tr.completed").length;

  total_completed_task = document.getElementById("TaskCompleted");
  total_completed_task.innerHTML = rowCount;
}

//this function used for deleting total task
function deleteTask(taskIndex) {
  tasks.splice(taskIndex, 1);
  counter--;
  document.getElementById("TaskTotal").innerHTML = counter;
  renderTasks();
}

/* this function used for total task
// function getTotal() {
//   var rowCount = document.querySelectorAll("#TaskList tr").length;
//   total_task = document.getElementById("TaskTotal");
//   total_task.innerHTML = rowCount;

  // let TaskList=document.getElementById('TaskList');
  // var rowCount = TaskList.childElementCount;
  // total_task=document.getElementById('TaskTotal');
  // total_task.innerHTML='Total :'+rowCount;
}
*/
