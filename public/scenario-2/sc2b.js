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
        text1.innerHTML = 'Hmm, you should bring something to identify yourself. What could it be?';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Let\'s choose a better option!';
        const erika = document.getElementById("sc1b-erika");
        erika.src= '../images/erika-unhappy.png';

    } else if (value == 'second-option') {
        container.style.color = '#8b0000';
        container.style.top = '0px';

        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'The bank is definitely the place to go when you have money on hand to put away, but you need something to identify yourself first! What could it be? ';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Let\'s choose a better option!';
        const erika = document.getElementById("sc1b-erika");
        erika.src= '../images/erika-unhappy.png';

    } else if (value == 'third-option') {

        container.style.color = 'green';
        container.style.top = '0px';
        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Perfect! Now we should ask a parent or guardian to take you to your chosen bank to open up the chequing and savings accounts that you picked.';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Click next to continue.';


        // if correct option, create new button to go to next page
        var buttonContainer = document.getElementById('sc1b-button-container');

        deleteChildren(buttonContainer);
    
        const nextAnchor = document.createElement('a');
        nextAnchor.href = 'sc2c.html';
        nextAnchor.classList.add('no-text-decoration');
        buttonContainer.appendChild(nextAnchor);
    
        const nextButton = document.createElement('div');
        nextAnchor.appendChild(nextButton);
        nextButton.classList.add("next-button");
        nextButton.classList.add("make-pointer");
        nextButton.innerText = 'Next';
        const erika = document.getElementById("sc1b-erika");
        erika.src= '../images/q3-star-happy.png';

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