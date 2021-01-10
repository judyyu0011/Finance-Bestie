// $(document).ready(()=>{
//     // document.getElementById('sc1a-name').innerHTML = "Hey " + sessionStorage.getItem("name") + "!";

// });

// // animates the introduction of the new scnearioes   
// function sc1aAnimations1() {
//     const topDiv = document.getElementById("sc2a-top-div");

//     deleteChildren(topDiv);

//     const buttonContainer = document.getElementById("sc1a-button-container"); 

//     deleteChildren(buttonContainer);


//     const terms = document.createElement('div');
//     topDiv.appendChild(terms);
//     terms.className = 'sc1a-terms';
//     terms.innerHTML = 
//     "<ul> <b> Before you go to the bank of your choice to open your first bank account, you'll need to bring : </b></ul> <br />" +
//     "<li> Two pieces of photo ID (Social Insurance Number(SIN), passport, birth certificate)</li> <br />" +
//     "<li><span class='tooltip'>your parent or guardian <span class='tooltiptext'>You are not old enough to sign legal documents, so your parents will sign them for you</span></span> and their photo ID</li> <br />" + 
//     "<div> At the bank, you can tell the bank teller, 'I would like to open a bank account today' and tell them the bank accounts of your choice. </div> <br />" +
//     "<div> When opening the bank account of your choice, you will be getting a <span class='tooltip'>debit card <span class='tooltiptext'> A plastic magnetic card that you use to access your money in your bank an make purchases. </span></span></span>  and you have to come up with a <span class='tooltip'> PIN number <span class='tooltiptext'>It's like a password to your debit card. You enter it when you make a purchase or access your accounts at the bank or ATM. It's usually between 4 to 6 digits. Memorize it and don't share it with anyone. It's a secret! </span></span>for your debit card</div>  <br />" +

//     "<div> Almost all set! Lets read some tips on how to keep your debit card and PIN number safe!"
//     ;

//     const nextAnchor = document.createElement('a');
//     nextAnchor.href = 'sc2b.html';
//     nextAnchor.classList.add('no-text-decoration');
//     buttonContainer.appendChild(nextAnchor);

//     const nextButton = document.createElement('div');
//     nextButton.classList.add("next-button");
//     nextButton.classList.add("make-pointer");
//     nextButton.innerHTML = 'Next';
//     buttonContainer.appendChild(nextButton);
//     nextButton.onclick = function() {sc1aAnimations3()};
// }


// // animates the tips for opening a bank account 
// function sc1aAnimations3() {
//     const topDiv = document.getElementById("sc2a-top-div");

//     deleteChildren(topDiv);

//     const buttonContainer = document.getElementById("sc1a-button-container"); 

//     deleteChildren(buttonContainer);

//     const tips = document.createElement('div');
//     topDiv.appendChild(tips);
//     tips.className = 'sc1a-tips';
//     tips.innerHTML = 
//     "<ul> <a>Tips for keeping your debit card and PIN number safe: <a> </ul> <br />" + 
//     "<li> Don't make your pin number your birthday or a common number, pick something that no one can easily guess it  </li> <br />" + 
//     "<li> Store it in a secure place, like your wallet (you don't want to lose it!) </li> <br />" +
//     "<li> Don‘t share your debit card or pin number with anyone (its a secret!)</li> <br />" +
//     "<li> Memorize your pin number and make sure no one is watching you when you enter your pin number </li> "
//     ;


//     // make a new anchor tag 
//     const nextAnchor = document.createElement('a');
//     nextAnchor.href = 'sc2b.html';
//     nextAnchor.classList.add('no-text-decoration');
//     buttonContainer.appendChild(nextAnchor);

//     const nextButton = document.createElement('div');
//     nextAnchor.appendChild(nextButton);
//     nextButton.classList.add("next-button");
//     nextButton.classList.add("make-pointer");
//     nextButton.innerText = 'Next';

// }



// function deleteChildren(div) {
//     while (div.firstElementChild) {
//         div.removeChild(div.firstElementChild);
//     }
// }