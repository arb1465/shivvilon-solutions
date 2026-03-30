cont = document.querySelector(".todo-container");
// console.log(cont);

let list = document.querySelector(".todo-list");

let btn = document.getElementById("add-btn");
// console.log(btn);

function getTodos() {
    let data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createElementForToDo(val) {
    let ele = document.createElement("li");
    ele.setAttribute("class", "todo-item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            sp.style.textDecoration = "line-through";
            sp.style.color = "gray"
        }
        else {
            sp.style.textDecoration = "none";
            sp.style.color = "black"
        }
    });

    let sp = document.createElement("span");    
    sp.innerText = val;

    let leftDiv = document.createElement("div");
    leftDiv.setAttribute("class", "left-div")

    leftDiv.append(checkbox);
    leftDiv.append(sp);
    ele.append(leftDiv);

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit");
    editBtn.innerText = "Edit";
    
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.innerText = "Delete";
    
    let actionDiv = document.createElement("div");
    actionDiv.setAttribute("class", "actions");

    actionDiv.append(editBtn);
    actionDiv.append(deleteBtn);
    ele.append(actionDiv);

    // console.log(ele);
    return ele;
}

let isEditing = false;

btn.addEventListener("click", () => {
    if (isEditing) return;

    let inp = document.querySelector("input");
    let val = inp.value;
    console.log("To Do :", val);

    if (val == "") {
        alert("Add some text first");
        return;
    }

    let newItem = createElementForToDo(val);

    let todos = getTodos();
    todos.push(val);
    saveTodos(todos);

    list.prepend(newItem);
    inp.value = "";
});

let ulList = document.querySelector("ul");

ulList.addEventListener("click", (e) => {
    ele = e.target;
    att = ele.getAttribute("class");
    console.log("Onclick button", att);

    todoItem = ele.closest(".todo-item");
    if (att == "delete") {
        let text = todoItem.firstElementChild.innerText;

        let todos = getTodos();
        todos = todos.filter(t => t !== text);
        saveTodos(todos);

        todoItem.remove();
        console.log("To Do item is deleted");
    } else if (att == "edit") {
        textEle = todoItem.children[0].children[1];

        parEle = document.querySelector(".todo-input")
        parEle.children[0].value = textEle.innerText;

        let saveBtn = parEle.children[1];
        isEditing = true
        saveBtn.innerText = 'Submit'
        saveBtn.style.backgroundColor = '#2172b9'

        saveBtn.onclick = () => {
            let val = parEle.children[0].value;

            if (val.trim() === "") {
                alert("Empty to do is not possible")
                return;
            }

            let oldText = textEle.innerText;
            let newText = val;

            let todos = getTodos();
            let index = todos.indexOf(oldText);

            if (index !== -1) {
                todos[index] = newText;
            }

            saveTodos(todos);

            textEle.innerText = newText;
            console.log("Todo is edited");

            isEditing = false;
            saveBtn.innerText = "Add";
            parEle.children[0].value = "";
            saveBtn.style.backgroundColor = '#40f88a'
        };

    }
});

window.addEventListener("DOMContentLoaded", () => {
    let todos = getTodos();

    todos.forEach(val => {
        let item = createElementForToDo(val);
        list.prepend(item);
    });
});

let input = document.querySelector(".todo-input input");

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        btn.click();
    }
});

