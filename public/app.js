function getName() {
    const name = document.getElementById('username').value;
    console.log(name);
    //document.querySelector('form').value);
    sessionStorage.setItem("name", name);
}


