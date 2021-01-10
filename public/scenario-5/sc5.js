function goNext() {
    var value = $("input[type=radio]:checked").val();

    var container = document.getElementById('sc1b-blurb');

    deleteChildren(container);

    if (value == 'third-option') {
        container.style.color = '#8b0000';
        container.style.top = '0px';

        container.innerHTML = '';
        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'That \'s a lot of cookies every month! While you can certainly spend some money on cookies, what else can you do with your money to help your save and grow your money?';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Let\'s choose a better PIN!';
        const erika = document.getElementById("sc1b-erika");
        erika.src= '../images/erika-star-unhappy.png';

    } else if (value == 'second-option') {
        container.style.color = '#8b0000';
        container.style.top = '0px';

        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Hmm, if we don\'t plan on spending money right away, we should try to make money with money. What else can we do?';
        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Let\'s choose a better PIN!';
        const erika = document.getElementById("sc1b-erika");
        erika.src= '../images/erika-star-unhappy.png';

    } else if (value == 'first-option') {

        container.style.color = 'green';
        container.style.top = '0px';
        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'Get into the habit of saving money now means you will have more money to use in the future! ';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Click next to continue.';

        const erika = document.getElementById("sc1b-erika");
        erika.src= '../images/erika-star-happy.png';

        // if correct option, create new button to go to next page
        var buttonContainer = document.getElementById('sc4-button-container');

        deleteChildren(buttonContainer);
    
        const nextAnchor = document.createElement('a');
        // for the next scenario
        nextAnchor.href = '../scenario-6/sc6.html';
        nextAnchor.classList.add('no-text-decoration');
        buttonContainer.appendChild(nextAnchor);
    
        const nextButton = document.createElement('div');
        nextAnchor.appendChild(nextButton);
        nextButton.classList.add("next-button");
        nextButton.classList.add("make-pointer");
        nextButton.innerText = 'Next';


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