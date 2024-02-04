const namea = document.getElementById('name')
const lastname = document.getElementById('lastname')
const number = document.getElementById('number')
const email = document.getElementById('email')
const message = document.getElementById('message')
const messageContent = document.getElementById('message').value

function Submit(){

    alert("Thanks!!! Your message :  " + message.value + ' was submitted..')

    namea.value="";
    lastname.value="";
    number.value="";
    email.value="";
    message.value="";
}