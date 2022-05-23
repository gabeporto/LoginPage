let userName = document.querySelector('#name')
let labelUserName = document.querySelector('.user-name')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('.user-email')
let validEmail = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('.user-password')
let validPassword = false

let confirmPassword = document.querySelector('#confirm-password')
let labelConfirmPassword = document.querySelector('.user-confirm-password')
let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

function checkEmail(email) {

    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    email.focus;
    return false;
    }
}

userName.addEventListener('keyup', () => {
    if(userName.value.length <= 2 ){
        labelUserName.setAttribute('style', 'color: red')
        labelUserName.innerHTML = "User name <label style='font-size: 12px'>*Enter at least 3 characters</label>"
        validNome = false
    } else {
        labelUserName.setAttribute('style', 'color: green')
        labelUserName.innerHTML = 'User name'
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if(checkEmail(email) == false) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = "Email <label style='font-size: 12px'>*Enter a valid e-mail address</label>"
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = "Email"
        validEmail = true
    }
})

password.addEventListener('keyup', () => {
    if(password.value.length <= 3) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = "Password <label style='font-size: 12px'>*Enter at least 4 characters</label>"
        validPassword = false
    } else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = "Password"
        validPassword = true
    }
})


confirmPassword.addEventListener('keyup', () => {
    if(password.value != confirmPassword.value) {
        labelConfirmPassword.setAttribute('style', 'color: red')
        labelConfirmPassword.innerHTML = "Confirm Password <label style='font-size: 12px'>*Password do not match</label>"
        validConfirmPassword = false
    } else {
        labelConfirmPassword.setAttribute('style', 'color: green')
        labelConfirmPassword.innerHTML = "Confirm Password"
        validConfirmPassword = true
    }
})

function createAccount() {
    if(validNome && validEmail && validPassword && validConfirmPassword) {

        let userList = JSON.parse(localStorage.getItem('userList') || '[]') 
        userList.push(
            {
                username: userName.value,
                email: email.value,
                password: password.value
            }
            )

        localStorage.setItem('userList', JSON.stringify(userList))

        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = "Creating account ..."
        msgError.innerHTML = ""
        msgError.setAttribute('style', 'display: none')

        setTimeout(() => {
            window.location.href = '/login.html' 
        }, 2000)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = "Complete all the fields correctly!"
        msgSucess.innerHTML = ""
        msgSucess.setAttribute('style', 'display: none')
    }
}

