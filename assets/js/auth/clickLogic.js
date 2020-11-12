const app = document.getElementById('app')
let observer = new MutationObserver(mutNode => {
    scroll(0, 50)
    if (localStorage.getItem('authType') == 'ECP') {
        changeTitle(
            msg.enterInSystem,
            msg.autirizationWithEcp
        )
    } else if (localStorage.getItem('authType') == 'Login') {
        changeTitle(
            msg.enterInSystem,
            msg.autirizationWithLoginAndPassword,
            msg.enterWithECPKey
        )
    } else if (localStorage.getItem('authType') == 'ChoiseProfile') {
        changeTitle(
            msg.choiseProfile,
            msg.pleaseChoiseProfileToAuthorized,
            msg.enterWithECPKey
        )
    } else if (localStorage.getItem('authType') == 'ForgotPassword') {
        changeTitle(
            msg.enterInSystem,
            msg.forgotPassword
        )
    } else if (localStorage.getItem('authType') == 'Contacts') {
        if (localStorage.getItem('authFromWhere') == 'ECP') {
            changeTitle(
                msg.technical_support,
                '',
                msg.enterWithECPKey
            )
        } else {
            changeTitle(
                msg.technical_support
            )
        }
    } else if (localStorage.getItem('authType') == 'ForgotPassword') {
        changeTitle(
            msg.forgotPassword + '?'
        )
    } else if (localStorage.getItem('authType') == 'ToMailSended') {
        changeTitle(
            msg.checkMail
        )
    } else if (localStorage.getItem('authType') == 'SendToMail') {
        changeTitle(
            msg.changePassword
        )
    }
    if (!infoSignTitle.innerHTML) infoSignTitle.style.padding = '0'
    else infoSignTitle.style.padding = '15px 30px 0'
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
        localStorage.setItem('authType', 'ECP')
        ShowHiddenBlock(
            [signInWithECP],
            [changeProfile]
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
                [signInWithLogAndPassword,authSignInLogin],
                [contacts,authSignInPassword]
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
    if (authSignInLogin.getAttribute('data-use') == 'key') {
        let check = false,
            name = ''
        notCheckedUser.innerHTML = msg.chooseUser
        document.querySelectorAll('.userKeyLogin').forEach(e => {
            if (e.parentElement.querySelector('.authUserCheck').value == 'checked') {
                name = e.querySelector('.userName').innerHTML
                check = true
            }
        })
        if (check) {
            chooseUserName.innerHTML = name
            notCheckedUser.innerHTML = ''
            loginPass.value = JSON.parse(localStorage.getItem('user')).password
            ShowHiddenBlock(
                [authSignInPassword],
                [authSignInLogin]
            )
        }
    } else {
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user')).login != loginName.value) {
                loginPass.value = ''
                localStorage.removeItem('user')
            } else {
                loginPass.value = JSON.parse(localStorage.getItem('user')).password
            }
        }
        checkInp(loginName, loginName.value.length > 3, msg.enterValidName)
        if (checkInp(loginName, loginName.value.length > 3, msg.enterValidName)) {
            chooseUserName.innerHTML = loginName.value
            ShowHiddenBlock(
                [authSignInPassword],
                [authSignInLogin]
            )
        }
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
            const user = {
                login: loginName.value,
                password: loginPass.value,
                date: new Intl.DateTimeFormat('ru-ru', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric'
                }).format(new Date())
            }
            localStorage.setItem('user', JSON.stringify(user))
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
    ShowHiddenBlock(
        [authSignInNoUsersLogin],
        [authSignInUsersblock]
    )
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