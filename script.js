
function logar () {
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;

    if(email === 'admin' && password === 'admin') {
        window.location.href = "passedlogin.html";
    }
    else {
        window.alert ('O Usuário e a Senha são admin');
    }
    
}




































/*const init = () => {
    const inputEmail = document.querySelector('input[type="email"]')
    const inputPassword = document.querySelector('input[type="password"]')
    const inputSubmit = document.querySelector ('input[type="submit"]')
}


if (inputSubmit) {
    inputSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        
        fetch ( 'https://regress.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                email: inputEmail.value,        
                password: inputPassword.value
            })
        }) .then ((reponse) => {return Response.json()})
    }).then ((data) => {console.log(data)})
}
*/







