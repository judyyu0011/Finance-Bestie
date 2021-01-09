function goNext() {
    var value = $("input[type=radio]:checked").val();

    var container = document.getElementById('sc1b-blurb');

    deleteChildren(container);

    if (value == 'first-option') {
        container.style.color = '#8b0000';
        container.style.top = '0px';

        container.innerHTML = '';
        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Hmm, I think we can choose a better account.';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'This interest rate is a bit low...';

        document.getElementById('sc1b-erika').src = 'images/erika-earring-unhappy.png';


    } else if (value == 'second-option') {
        container.style.color = 'green';
        container.style.top = '0px';

        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Great choice! This savings account has no minimum balance and a good interest rate.';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Click next to continue.';

        document.getElementById('sc1b-erika').src = 'images/erika-earring-happy.png';

        var buttonContainer = document.getElementById('sc1b-button-container');

        deleteChildren(buttonContainer);
    
        const nextAnchor = document.createElement('a');
        nextAnchor.href = 'sc2.html';
        nextAnchor.classList.add('no-text-decoration');
        buttonContainer.appendChild(nextAnchor);
    
        const nextButton = document.createElement('div');
        nextAnchor.appendChild(nextButton);
        nextButton.classList.add("next-button");
        nextButton.classList.add("make-pointer");
        nextButton.innerText = 'Next';

    } else if (value == 'third-option') {

        container.style.color = '#8b0000';
        container.style.top = '0px';
        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Hmm, although this account has a high number of monthly transactions, you always need to keep a lot of money in this account. More than $1000!';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Let\'s choose a different  savings account...';

        document.getElementById('sc1b-erika').src = 'images/erika-earring-unhappy.png';

    } else {
        container.style.color = "black";
        container.innerHTML = 'Please choose a savings account!';
        container.style.top = '100px';
    }

}



function deleteChildren(div) {
    while (div.firstElementChild) {
        div.removeChild(div.firstElementChild);
    }
}