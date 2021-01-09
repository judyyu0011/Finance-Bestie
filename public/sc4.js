function goNext() {
    var value = $("input[type=radio]:checked").val();

    var container = document.getElementById('sc1b-blurb');

    deleteChildren(container);

    if (value == 'first-option') {
        container.style.color = 'green';
        container.style.top = '0px';

        container.innerHTML = '';
        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'If you don\'t planning on spending it, this is a great choice!';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'Depositing and keeping money in our savings account will allow the money to grow.';

        var text3 = document.createElement('p');
        container.appendChild(text3);
        text3.innerHTML = 'You will have more than $100 in your savings account in no time!';

        document.getElementById('sc1b-erika').src = 'images/erika-earring-happy.png';

        var buttonContainer = document.getElementById('sc4-button-container');

        deleteChildren(buttonContainer);
    
        const nextAnchor = document.createElement('a');
        nextAnchor.href = 'sc5.html';
        nextAnchor.classList.add('no-text-decoration');
        buttonContainer.appendChild(nextAnchor);
    
        const nextButton = document.createElement('div');
        nextAnchor.appendChild(nextButton);
        nextButton.classList.add("next-button");
        nextButton.classList.add("make-pointer");
        nextButton.innerText = 'Next';

    } else if (value == 'second-option') {
        container.style.color = '#8b0000';
        container.style.top = '0px';

        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = '$100 on candy?!';

        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'We all love sweets, but what else can we do with the money?';

        document.getElementById('sc1b-erika').src = 'images/erika-earring-happy.png';

    } else if (value == 'third-option') {

        container.style.color = '#8b0000';
        container.style.top = '0px';
        container.innerHTML = '';

        var text1 = document.createElement('p');
        container.appendChild(text1);
        text1.innerHTML = 'If you are planning to buy something in the future, then it\'s good to put it in the chequing account.'
        
        var text2 = document.createElement('p');
        container.appendChild(text2);
        text2.innerHTML = 'If you\'re not planning on using the money soon, think about depositing the $100 into your savings account where your money can grow!';

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