let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click" , addTask)

input.addEventListener("keydown" , function(event){
    if(event.key == "Enter"){
        addTask();
    }
})

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.dir(event);
    }
})

function addTask(){
    let item = document.createElement("li");
    item.innerText = input.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
}