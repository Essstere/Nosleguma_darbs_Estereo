var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    // Create a delete button and configure it:
    var btnDelete = document.createElement("button");
    btnDelete.classList.add("Dzēst");
    btnDelete.textContent = "Dzēst";
    
    // Append the button to the list item
    li.appendChild(btnDelete);
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
  // Determine if it was a delete button that was clicked
  if(event.target.classList.contains("delete")){
    // Remove the closest li ancestor to the clicked element
    event.target.closest("li").remove();
  }

}

button.addEventListener("click", addListAfterClick);

// keypress is deprecated, use keydown instead
input.addEventListener("keydown", addListAfterKeypress);

// Handle all the clicks that originate from within the <ul> at
// the <ul> level when they bubble up to it instead of setting each
// button within the <ul> up with its own click event handler.
ul.addEventListener("click", deleteAfterClick);