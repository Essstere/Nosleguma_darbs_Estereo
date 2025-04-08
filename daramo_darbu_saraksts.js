
document.getElementById("add").onclick = function() { //izveidoju pogu funkcionālu
    var text = document.getElementById("input").value;
    var li = "<li>" + text + "</li>";
    document.getElementById("list").insertAdjacentHTML('beforeend', li);
    document.getElementById("input").value = ""; 
  }
  const element = document.getElementById("Darbs1");
  element.remove();






  

   button = document.getElementById("enter");
var input = document.getElementById("userinput");  
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
   
    var btnDelete = document.createElement("button");   //Izveidoju 'dzēst' pogai funkcionalitāti
    btnDelete.classList.add("Dzēst");
    btnDelete.textContent = "Dzēst";
    
   
    li.appendChild(btnDzēst);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteAfterClick(event) {

  if(event.target.classList.contains("Dzēst")){
  
    event.target.closest("li").remove();
  }

}

button.addEventListener("click", addListAfterClick);


input.addEventListener("keydown", addListAfterKeypress);


ul.addEventListener("click", deleteAfterClick);