let usersLogin = null
setTimeout(() => {
    document.getElementById('loading').classList.add('hidden')
    document.querySelector('.app_main').classList.remove('hidden')
    document.querySelector('.app_main').classList.add('show')
    if (localStorage.getItem('authFromWhere')) localStorage.removeItem('authFromWhere')
    if (localStorage.getItem('authType')) {
        if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).length > 0) {
            renderUserLogin()
        }else{
            ShowHiddenBlock(
                [authSignInNoUsersLogin],
                [authSignInUsersblock]
            )
        }
        if (localStorage.getItem('authType') == 'ECP') {
            signInWithECP.classList.remove('hidden')
            signInWithECP.classList.add('show')
        } else {
            localStorage.setItem('authType', 'Login')
            signInWithLogAndPassword.classList.remove('hidden')
            signInWithLogAndPassword.classList.add('show')
        }
    } else {
        localStorage.setItem('authType', 'ECP')
        signInWithECP.classList.remove('hidden')
        signInWithECP.classList.add('show')
    }
    document.getElementById('appFooter').classList.remove('hidden')
    document.getElementById('appFooter').classList.add('show')
}, 2000)


