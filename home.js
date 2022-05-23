let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
let logged = document.querySelector('#logged')


logged.innerHTML = 'Welcome, ' + loggedUser.username + '!'

function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('loggedUser')
    window.location.href='/login.html'
}
