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
        text1.innerHTML = 'Even though your want to get your friend the perfect gift, we should never spend more than we have.';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'You will be charged extra by the bank if you spend more than what you have in your bank account!';

        document.getElementById('sc1b-erika').src = '../images/erika-birthday-unhappy.png';

    } else if (value == 'second-option') {
        container.style.color = 'green';
        container.style.top = '0px';

        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Awesome idea!';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'You\'ll be able to get a great gift for your friend and have a set budget for yourself so that you don\'t spend more than you have.';

        var text3 = document.createElement('p');
        container.appendChild(text3);
        text3.innerHTML = 'Your friend will be so happy! Click next to continue.';

        document.getElementById('sc1b-erika').src = '../images/erika-birthday-happy.png';


        var buttonContainer = document.getElementById('sc4-button-container');

        deleteChildren(buttonContainer);
    
        const nextAnchor = document.createElement('a');
        nextAnchor.href = '../end.html';
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
        text1.innerHTML = 'You can take money out of your bank account, even your savings account, at any time unless there are special rules.'
        
        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'When you aren\'t sure, don\'t be afraid to task the staff at your local bank!';

        
        document.getElementById('sc1b-erika').src = '../images/erika-birthday-unhappy.png';

    } else {
        container.style.color = "black";
        container.innerHTML = 'Please choose an option!';
        container.style.top = '100px';
    }

}



function deleteChildren(div) {
    while (div.firstElementChild) {
        div.removeChild(div.firstElementChild);
    }
}