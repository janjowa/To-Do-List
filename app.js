function delAll() {
 document.getElementById("tasks").innerHTML='';
}
function addNewTask() {
    var task=document.getElementById("taskInput");
    document.getElementById("tasks").innerHTML+="<tr><td>"+task.value+"   <button id='editBtn' onclick='editMe(this)'>EDIT</button>   <button id='delBtn' onclick='delMe(this)'>DELETE</button></td></tr>";
task.value='';



}

function delMe(e) {
    e=e.parentNode.parentNode;
    e.remove();
    console.log(e);
}

function editMe(e) {
var oldTask=e.previousSibling.textContent;
   var newTask=prompt("Edit Task", oldTask);
   e.previousSibling.textContent=newTask;
    console.log(oldTask);
}