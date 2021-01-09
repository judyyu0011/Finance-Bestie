$(document).ready(()=>{
    document.getElementById('sc1a-name').innerHTML = "Hey " + sessionStorage.getItem("name") + "!";
    

});

function sc1aAnimations1() {
    const topDiv = document.getElementById("sc1a-top-div");

    deleteChildren(topDiv);

    const buttonContainer = document.getElementById("sc1a-button-container"); 

    deleteChildren(buttonContainer);

    const secondSen = document.createElement('div');
    topDiv.appendChild(secondSen);
    secondSen.className = 'sc1a-blurb';
    secondSen.innerHTML = "Before we do that, let's go over some helpful terms.";

    const terms = document.createElement('div');
    topDiv.appendChild(terms);
    terms.className = 'sc1a-terms';
    terms.innerHTML = 
    "<b>Chequing Account</b>: An account where you can store your money in and use to make purchases. <br />" +
    "<b>Savings Account</b>: An account where you can store your money in and use to make purchases. <br />" +
    "<b>Monthly Transaction Limit</b>: The number of transactions (remember, deposit, withdraw and transfer) you can have per month. Don't go over this number! <br />"
    "<b>Annual fee</b>: A fee that you pay once a year to use your bank account.<br />";

    const nextButton = document.createElement('div');
    nextButton.className = "next-button";
    nextButton.innerHTML = 'Next';
    buttonContainer.appendChild(nextButton);
    nextButton.onclick = function() {sc1aAnimations2()};
}


function sc1aAnimations2() {
    const topDiv = document.getElementById("sc1a-top-div");

    deleteChildren(topDiv);
}


function deleteChildren(div) {
    while (div.firstElementChild) {
        div.removeChild(div.firstElementChild);
    }
}