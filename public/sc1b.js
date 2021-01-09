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
        text1.innerHTML = 'Hmm, even though the number of monthly transactions available is high, there is also an annual fee.'

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Let\'s choose a better chequing account option.'

        document.getElementById('sc1b-erika').src = 'images/erika-hat-unhappy.png';

    } else if (value == 'second-option') {
        container.style.color = '#8b0000';
        container.style.top = '0px';

        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Hmm, I think we can choose a better account.';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'The monthly transaction limit is quite low...';

        document.getElementById('sc1b-erika').src = 'images/erika-hat-unhappy.png';

    } else if (value == 'third-option') {

        container.style.color = 'green';
        container.style.top = '0px';

        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Awesome choice! This chequing account has a high monthly transaction limit and no annual fees.';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Click next to continue.';

        document.getElementById('sc1b-erika').src = 'images/erika-hat-happy.png';

        // if correct option, create new button to go to next page
        var buttonContainer = document.getElementById('sc1b-button-container');

        deleteChildren(buttonContainer);
    
        const nextAnchor = document.createElement('a');
        nextAnchor.href = 'sc1c.html';
        nextAnchor.classList.add('no-text-decoration');
        buttonContainer.appendChild(nextAnchor);
    
        const nextButton = document.createElement('div');
        nextAnchor.appendChild(nextButton);
        nextButton.classList.add("next-button");
        nextButton.classList.add("make-pointer");
        nextButton.innerText = 'Next';

    } else {
        container.style.color = "black";
        container.innerHTML = 'Please choose a chequing account!';
        container.style.top = '100px';
    }

}



function deleteChildren(div) {
    while (div.firstElementChild) {
        div.removeChild(div.firstElementChild);
    }
}