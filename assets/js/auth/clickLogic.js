const app = document.getElementById('app')
let observer = new MutationObserver(mutNode => {
    scroll(0, 50)
    renderTitleAuth()
    obs(app)
})
toOzb.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('lang', 'uz-oz')
    location.reload()
})
toRus.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('lang', 'ru-ru')
    location.reload()
})
toUzb.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('lang', 'uz-uz')
    location.reload()
})
otherMethod.addEventListener('click', e => {
    e.preventDefault()
    if (localStorage.getItem('authType') == 'Login') {
        localStorage.setItem('authType', 'ECP')
        ShowHiddenBlock(
            [signInWithECP],
            [signInWithLogAndPassword]
        )
        return
    }
    if (localStorage.getItem('authType') == 'ECP') {
        ShowHiddenBlock(
            [signInWithLogAndPassword, authSignInLogin],
            [signInWithECP, authSignInPassword]
        )
    }
    if (localStorage.getItem('authType') == 'ChoiseProfile') {
        localStorage.setItem('authType', 'Login')
        ShowHiddenBlock(
            [signInWithLogAndPassword, authSignInLogin],
            [changeProfile, authSignInPassword]
        )
        return
    }
    if (localStorage.getItem('authType') == 'ForgotPassword') {
        ShowHiddenBlock(
            [signInWithLogAndPassword],
            [frgtPass]
        )
    }
    if (localStorage.getItem('authType') == 'Contacts') {
        if (localStorage.getItem('authFromWhere') == 'ECP') {
            localStorage.setItem('authType', 'ECP')
            ShowHiddenBlock(
                [signInWithECP],
                [contacts]
            )
        } else {
            ShowHiddenBlock(
                [signInWithLogAndPassword, authSignInLogin],
                [contacts, authSignInPassword]
            )
            localStorage.setItem('authType', 'Login')
        }
        localStorage.removeItem('authFromWhere')
        return
    }
    if (localStorage.getItem('authType') == 'ToMailSended') {
        ShowHiddenBlock(
            [signInWithLogAndPassword, document.querySelector('.or_block')],
            [checkYourEmail]
        )
        forgotEmailInp.style.border = `1px solid #C1C5C8`
    }
    localStorage.setItem('authType', 'Login')
})
nextBtnToAuthPassword.addEventListener('click', e => {
    e.preventDefault()
    checkInp(loginName, loginName.value.length > 3, msg.enterValidName)
    if (checkInp(loginName, loginName.value.length > 3, msg.enterValidName)) {
        if (localStorage.getItem('user')) {
            console.log(JSON.parse(localStorage.getItem('user')).filter(us=>us.login === loginName.value))
            loginPass.value = JSON.parse(localStorage.getItem('user')).find(us=>us.login === loginName.value)
                ? JSON.parse(localStorage.getItem('user')).filter(us=>us.login === loginName.value)[0].password
                : ''
        }
        chooseUserName.innerHTML = loginName.value
        ShowHiddenBlock(
            [authSignInPassword],
            [authSignInLogin]
        )
    }
})
prevBtnToAuthLogin.addEventListener('click', e => {
    e.preventDefault()
    ShowHiddenBlock(
        [authSignInLogin],
        [authSignInPassword]
    )
})
logInWithLogin.addEventListener('click', e => {
    e.preventDefault()
    checkInp(loginPass, loginPass.value.length > 5, msg.smallPassword)
    if (checkInp(loginPass, loginPass.value.length > 5, msg.smallPassword)) {
        localStorage.setItem('authType', 'ChoiseProfile')
        if (authSignInLogin.getAttribute('data-use') == 'login') {
            let users = []
            const user = {
                id: new Date().getTime(),
                login: loginName.value,
                password: loginPass.value,
                date: new Intl.DateTimeFormat('ru-ru', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric'
                }).format(new Date())
            }
            if (localStorage.getItem('user')) {
                users = JSON.parse(localStorage.getItem('user'))
            }
            if (!users.find(us=>us.login === user.login))
                users.push(user)
            localStorage.setItem('user', JSON.stringify(users))

            authSignInLogin.setAttribute('data-use', 'key')
            renderUserLogin()
        }
        ShowHiddenBlock(
            [changeProfile, authSignInUsersblock],
            [signInWithLogAndPassword, authSignInNoUsersLogin]
        )
    }
})
otherUser.addEventListener('click', e => {
    e.preventDefault()
    authSignInLogin.setAttribute('data-use', 'login')
    loginName.value = ''
    loginName.style = 'border: 1px solid #C1C5C8'
    loginPass.value = ''
    loginPass.style = 'border: 1px solid #C1C5C8'
    ShowHiddenBlock(
        [authSignInNoUsersLogin],
        [authSignInUsersblock]
    )
})
delUser.addEventListener('click', e => {
    e.preventDefault()
    const method = authSignInUsers.getAttribute('data-method')
    let links = document.querySelectorAll('.userKeyLogin')
    if (method == 'login') {
        authSignInUsers.setAttribute('data-method', 'delete')
        links.forEach(l => {
            const logo = l.querySelector('.logo')
            logo.innerHTML = '<i class="fas fa-minus-circle" style="color:#c0392b;"></i>'
            delUser.querySelector('i').style.color = '#c0392b'
        })
    } else {
        authSignInUsers.setAttribute('data-method', 'login')
        links.forEach(l => {
            const logo = l.querySelector('.logo')
            logo.innerHTML = '<i class="far fa-user-circle"></i>'
            delUser.querySelector('i').style.color = '#777777'
        })
    }
})

delUser.addEventListener('mouseover', ()=>{
    delUser.querySelector('i').style.color = '#c0392b'
})
delUser.addEventListener('mouseout', ()=>{
    delUser.querySelector('i').style.color = '#777777'
})

forgotPassword.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('authType', 'ForgotPassword')
    ShowHiddenBlock(
        [frgtPass],
        [signInWithLogAndPassword]
    )
})
forgotPass.addEventListener('click', e => {
    e.preventDefault()
    let inp = forgotEmailInp.value,
        reg = /^.+@.+\..+$/i
    if (checkInp(forgotEmailInp, forgotEmailInp.value.match(reg), msg.incorrectEmail)) {
        forgotEmailInp.value = ''
        localStorage.setItem('authType', 'ToMailSended')
        ShowHiddenBlock(
            [checkYourEmail],
            [frgtPass, document.querySelector('.or_block')]
        )
    }
})
toContacts.addEventListener('click', e => {
    const from = localStorage.getItem('authType')
    localStorage.setItem('authFromWhere', from)
    e.preventDefault()
    setTimeout(() => {
        localStorage.setItem('authType', 'Contacts')
        ShowHiddenBlock(
            [contacts],
            [signInWithECP, signInWithLogAndPassword, frgtPass]
        )
    }, 0)
})
backToAuthLogin.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('authType', 'Login')
    ShowHiddenBlock(
        [signInWithLogAndPassword],
        [frgtPass]
    )
})
loginName.addEventListener('input', () => {
    checkInp(loginName, loginName.value.length > 3, msg.enterValidName)
})
loginPass.addEventListener('input', () => {
    checkInp(loginPass, loginPass.value.length > 5, msg.smallPassword)
})
forgotEmailInp.addEventListener('input', () => {
    let reg = /^.+@.+\..+$/i
    checkInp(forgotEmailInp, forgotEmailInp.value.match(reg), msg.incorrectEmail)
})
//ниже код для смены пароля
changePassword.addEventListener('click', e => {
    e.preventDefault()
    let inp = trueEmail.value
    if (
        checkInp(newPassword, newPassword.value.length > 5, msg.smallPassword) &&
        checkInp(checkNewPassword, checkNewPassword.value === newPassword.value, msg.notMatchPasswords)
    ) {
        localStorage.setItem('authType', 'ToMailSended')
        newPassword.value = ''
        checkNewPassword.value = ''
        newPassword.style.border = '1px solid #C1C5C8'
        checkNewPassword.style.border = '1px solid #C1C5C8'
        ShowHiddenBlock(
            [checkYourEmail],
            [changePass]
        )
    }
})
newPassword.addEventListener('input', () => {
    checkInp(newPassword, newPassword.value.length > 5, msg.smallPassword)
})
checkNewPassword.addEventListener('input', () => {
    checkInp(checkNewPassword, checkNewPassword.value === newPassword.value, msg.notMatchPasswords)
})
//выше код для смены пароля

obs(app)