$(document).ready(()=>{
    document.getElementById('sc1a-name').innerHTML = "Nice to meet you, " + sessionStorage.getItem("name") + "!";
});

// animates the terms 
function sc1aAnimations1() {
    const topDiv = document.getElementById("sc1a-top-div");

    deleteChildren(topDiv);

    const buttonContainer = document.getElementById("sc1a-button-container"); 

    deleteChildren(buttonContainer);

    const secondSen = document.createElement('div');
    topDiv.appendChild(secondSen);
    secondSen.classList.add('sc1a-blurb');
    secondSen.classList.add('blurb');
    secondSen.id = "term-intro";
    
    secondSen.innerHTML = "Before we do that, let's go over some helpful terms.";

    const terms = document.createElement('div');
    topDiv.appendChild(terms);
    terms.className = 'sc1a-terms';
    terms.innerHTML = 
    "<p><b>Chequing Account</b>: An account where you can store your money in and use to make purchases.</p>" +
    "<p><b>Savings Account</b>: An account where you can store your money in and use to make purchases. </p>" +
    "<p><b>Transaction</b>: An action you can do with your bank accounts; for example, deposit, withdraw and transfer.</p>" +  
    "<p><b>Monthly Transaction Limit</b>: The number of transactions (remember, deposit, withdraw and transfer) you can have per month. Don't go over this number!</p>" +
    "<p><b>Annual Fee</b>: A fee that you pay once a year to use your bank account.</p>" + 
    "<p><b>Balance and Minimum Balance</b>: How much money you have currently in your account. Sometimes an account requires you to keep a minimum balance, for example, a minimum balance of $50; then you cannot have money less $50 in the account.</p>" + 
    "<p><b>Savings Interest Rate</b>: It's a feature of the saving account. If the interest rate is 2%, you get 100% + 2% = 102% of your money in your savings account.</p>"
    ;

    const nextButton = document.createElement('div');
    nextButton.classList.add("next-button");
    nextButton.classList.add("make-pointer");
    nextButton.innerHTML = 'Next';
    buttonContainer.appendChild(nextButton);
    nextButton.onclick = function() {sc1aAnimations2()};
}

// animates the tips for choosing a bank 
function sc1aAnimations2() {
    const topDiv = document.getElementById("sc1a-top-div");

    deleteChildren(topDiv);

    const buttonContainer = document.getElementById("sc1a-button-container"); 

    deleteChildren(buttonContainer);

    const secondSen = document.createElement('div');
    topDiv.appendChild(secondSen);
    secondSen.classList.add('sc1a-blurb');
    secondSen.classList.add('blurb');
    secondSen.innerHTML = "Next, we should check out some tips for choosing a bank and bank account!";

    const tips = document.createElement('div');
    topDiv.appendChild(tips);
    tips.className = 'sc1a-tips';
    tips.innerHTML = 
   '<b>Tips for choosing a bank</b><ul></ul><li>It has lots of locations close to where you live and/or work</li><li> It offers accounts(chequing, savings) that are free for teens and students, no annual fees </li><li> It has a great reputation and  great customer service  </li><li>Ask your parents, guardians, family and friends, or people you trust for which bank they are with and why. Perhaps they have some helpful advice to share!</li>';

    const nextButton = document.createElement('div');
    nextButton.classList.add("next-button");
    nextButton.classList.add("make-pointer");

    nextButton.innerHTML = 'Next';
    buttonContainer.appendChild(nextButton);
    nextButton.onclick = function() {sc1aAnimations3()};
}

// animates the tips for choosing a bank account 
function sc1aAnimations3() {
    const topDiv = document.getElementById("sc1a-top-div");

    deleteChildren(topDiv);

    const buttonContainer = document.getElementById("sc1a-button-container"); 

    deleteChildren(buttonContainer);

    const tips = document.createElement('div');
    topDiv.appendChild(tips);
    tips.className = 'sc1a-tips';
    tips.innerHTML = 
   "<b>Tips for choosing a chequing and savings account</b><ul>  </ul><li>It should be free for students and teens and does not require you to have a minimum balance (you can have $0 in the bank) </li><li>It offers accounts (chequing, savings) that are free for teens and students, no annual fees </li><li> It should have a good number of monthly transaction limit (refer to Finance Terms 101 under Resources) </li><li>If it's a savings account, it should have a good savings interest rate (refer to Finance Terms 101 under Resources), tne higher the better!</li>";

    // make a new anchor tag 
    const nextAnchor = document.createElement('a');
    nextAnchor.href = 'sc1b.html';
    nextAnchor.classList.add('no-text-decoration');
    buttonContainer.appendChild(nextAnchor);

    const nextButton = document.createElement('div');
    nextAnchor.appendChild(nextButton);
    nextButton.classList.add("next-button");
    nextButton.classList.add("make-pointer");
    nextButton.innerText = 'Next';

}



function deleteChildren(div) {
    while (div.firstElementChild) {
        div.removeChild(div.firstElementChild);
    }
}