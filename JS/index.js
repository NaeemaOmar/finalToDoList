// Hi. I edited my code after submission since there were a bunch of things I 
// wanted to add and correct. I understand this counts as late submission.
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

// initializing counter to be used for the ID
let i = 0


function addToDoItem(){
    let itemName = txtInput.value;
    if (checkTxtInputValididty){
        const toDoItem = {
            id: ++i,
            name: itemName.toUpperCase()
            dateCreated: new Date().toLocaleDateString(),
        }
    }
}
