function printCompany(){
    document.getElementById('outputCompany').innerHTML = inputCompany.value;
}

function printMessage(){
    document.getElementById('outputMessage').innerHTML = inputMessage.value;
}

function changeBg(){
    var bgColor = document.getElementById('inputBg').value;
    document.getElementById('card').style.background = bgColor;
}

function changeTextColor(){
    var textColor = document.getElementById('inputTextColor').value;
    document.getElementById('card').style.color = textColor;
}

function textAlign(selected_id){
    document.getElementById('card-body').className= selected_id;
}

function printName(){
    document.getElementById('outputName').innerHTML = inputClientName.value;
}

function printJobTitle(){
    document.getElementById('outputJob').innerHTML = inputJobTitle.value;
}

function printEmail(){
    document.getElementById('outputEmail').innerHTML = inputEmail.value;
}

function printPhone(){
    document.getElementById('outputPhone').innerHTML = inputPhone.value;
}

function formSubmit() {
    if (!inputClientName.value || !outputCompany.value || !outputCompany.value
        || !outputJob.value || !outputEmail.value || !outputPhone.value) {

        alert("Please complete all required questions")
    }
}

function fromReset(){
    window.location.reload();  
}

