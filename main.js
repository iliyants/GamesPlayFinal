let registerBtn = document.getElementById('register-btn');
registerBtn.addEventListener('click', registerValidationForm)

const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const confirmPassword = document.getElementById('register-password-confirm');



function registerValidationForm(){
   
    let emailRegEx = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}/);

    if (!registerEmail.value.match(emailRegEx)) {
        alert('Please enter a valid e-mail')
        registerEmail.focus();
        return false
    }

    if (!registerPassword.value.match(passwordRegex)) {
        alert('Please enter a valid password')
        registerPassword.focus();
        return false
    }

    if (registerPassword.value !== confirmPassword.value) {
        alert('sakjfdgaskjdas')
    }

   }