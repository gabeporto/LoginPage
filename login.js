let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
let logged = document.querySelectorAll('#logged')

function login () {
    let userEmail = document.querySelector('#email')
    let labelUserEmail = document.querySelector('.user-email')

    let userPassword = document.querySelector('#password')
    let labelUserPassword = document.querySelector('.user-password')

    let msgErrorLogin =  document.querySelector('#msgError')
    let userList = []

    let userValid = {
        user: '',
        email: '',
        password: ''    
    }

    userList = JSON.parse(localStorage.getItem('userList'))

    userList.forEach((item) => {
        if(userEmail.value == item.email && userPassword.value == item.password) {
            userValid = {
                username: item.username,
                email : item.email,
                password: item.password
            }
            msgErrorLogin.setAttribute('style', 'display: none')
            labelUserEmail.setAttribute('style', 'color: black')
            labelUserPassword.setAttribute('style', 'color: black')
            window.location.href = '/home-screen.html' 
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
            localStorage.setItem('token', token)

            localStorage.setItem('loggedUser', JSON.stringify(userValid))

            console.log(token)
        } else {
            msgErrorLogin.setAttribute('style', 'display: block; margin-top: 25px; margin-bottom: -50px')
            msgErrorLogin.innerHTML = 'Incorrect email or password!'
            labelUserEmail.setAttribute('style', 'color: red')
            labelUserPassword.setAttribute('style', 'color: red')
            userEmail.focus()
        }
    })

}



