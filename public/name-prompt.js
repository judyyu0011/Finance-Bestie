function getName() {

    var f = document.getElementsByTagName('form')[0];

    if(f.checkValidity()) {
        const name = document.getElementById('username').value;
        sessionStorage.setItem("name", name);
        window.location.href = 'sc1a.html';
    } else {
        document.getElementById('username').setCustomValidity('Please write your name here.')
        f.reportValidity();
    }
}


