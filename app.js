var inputValue = document.getElementById("input");
var todoDiv = document.getElementById("todo-div");

if (!inputValue) {
    alert("Please Enter Value First!")
}





function addTodo() {
    if (!inputValue.value) {
        alert("Please Enter Value First!")
        return;
    }
    // Adding Todo in HTML
    var para = document.createElement('P');
    var todoTxt = document.createTextNode(inputValue.value);
    para.setAttribute("class", "todoPara");
    // Adding Delete Btn
    var deleteBtn = document.createElement("Button");
    var deleteTxt = document.createTextNode("Delete");
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");
    deleteBtn.appendChild(deleteTxt);
    // Adding Edit Btn
    var editBtn = document.createElement("Button");
    var editTxt = document.createTextNode("Edit");
    editBtn.setAttribute("class", "editBtn");
    editBtn.setAttribute("onclick", "editTodo(this)")
    editBtn.appendChild(editTxt);

    // Appending All Elements
    para.appendChild(todoTxt)
    todoDiv.appendChild(para);
    para.appendChild(deleteBtn);
    para.appendChild(editBtn);

    // Empty Input After Value 
    inputValue.value = '';

}
// Adding Delete Btn 
function deleteTodo(ele) {
    var eleTodo = ele.parentNode
    eleTodo.remove()
}

// Adding Edit Btn
function editTodo(ele) {

    var para = ele.parentNode
    var placeHolder = para.firstChild.nodeValue;
    console.log(placeHolder);
    var editValue = prompt("Edit Todo Value", placeHolder);

    para.firstChild.nodeValue = editValue;
}



// Delete All Todo Function.
function deleteAllTodo() {
    todoDiv.innerHTML = "";
}
