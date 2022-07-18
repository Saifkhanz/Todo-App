let check = null;
localStorage.clear();
//displayTask();
function addTask() {
  document.getElementById("error").innerHTML = "";
  let task = document.getElementById("NewTask").value;
  if (task == "") {
    document.getElementById("error").innerHTML = "Please enter your task";
  } else {
    if (check == null) {
      let arr = getTask();
      if (arr == null) {
        let data = [task];
        setTask(data);
      } else {
        arr.push(task);
        setTask(arr);
      }
      document.getElementById("error").innerHTML = "Task added";
    } else {
      let arr = getTask();
      arr[check] = task;
      setTask(arr);
      document.getElementById("error").innerHTML = "Task updated";
    }
    document.getElementById("NewTask").value = "";
    displayTask();
  }
}

function displayTask() {
  let arr = getTask();
  if (arr != null) {
    let taskData = "";
    serialNo = 1;
    for (let k in arr) {
      taskData =
        taskData +
        `<tr><td><input type="checkbox"  onclick='completedTask(this)' name='checkbox'></td>
<td>${serialNo}</td><td>${arr[k]}</td><td>&nbsp&nbsp&nbsp&nbsp<a href="javascript:void(0)" 
onclick="editTask(${k})">Edit</a>&nbsp&nbsp;<a href="javascript:void(0)" onclick="deleteTask(${k})">Delete</a></td></tr>`;

      document.getElementById("TaskTotal").innerHTML = serialNo;
      serialNo++;
    }

    console.log(taskData);
    document.getElementById("TaskList").innerHTML = taskData;
  }
}
function completedTask(e) {
  var check = e.checked;

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
function editTask(taskId) {
  check = taskId;
  console.log(check);
  let arr = getTask();
  document.getElementById("NewTask").value = arr[taskId];
}

function deleteTask(taskId) {
  let arr = getTask();
  arr.splice(taskId, 1);
  setTask(arr);
  displayTask();
}

function getTask() {
  let arr = JSON.parse(localStorage.getItem("index"));
  return arr;
}

function setTask(arr) {
  localStorage.setItem("index", JSON.stringify(arr));
}
