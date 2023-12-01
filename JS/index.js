// toDoItem input tag
let txtInput = document.querySelector('[data-input]');
// checking if toDoItem has more than 3 characters. If not, error p-tag 
let errorPtag = document.querySelector('.errorParagraph');
function checkTxtInputValididty(txtInput){
    if(txtInput.value.lenght>3){
        txtInput = txtInput;
        }else {
        errorPtag.textContent = "Your to-do item must have more than 3 characters"
    }
    }

// generating a randomised id number to be used for the toDoItem id
function randomId(){
    return Math.random();
}


function addToDoItem(){
    let itemName = txtInput.value;
    if (checkTxtInputValididty){
        const toDoItem = {
            id: randomId(),
            name: itemName.toUpperCase()
            dateCreated: new Date().toLocaleDateString(),
        }
    }
}