const app = document.getElementById('app')
let observer = new MutationObserver(mutNode => {
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
    } else if (localStorage.getItem('authType') == 'ChangeProfile') {
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
        if (localStorage.getItem('authFromWhere') == 'ECP'){
            changeTitle(
                msg.technical_support,
                '',
                msg.enterWithECPKey
            )
        }else{
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
    location.href = location.href
})
toRus.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('lang', 'ru-ru')
    location.href = location.href
})
toUzb.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('lang', 'uz-uz')
    location.href = location.href
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
            [signInWithLogAndPassword],
            [signInWithECP]
        )
    }
    if (localStorage.getItem('authType') == 'ChangeProfile') {
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
        if (localStorage.getItem('authFromWhere') == 'ECP'){
            ShowHiddenBlock(
                [signInWithECP],
                [contacts]
            )
        }else{
            ShowHiddenBlock(
                [signInWithLogAndPassword],
                [contacts]
            )
        }
        localStorage.removeItem('authFromWhere')
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
logInWithLogin.addEventListener('click', e => {
    e.preventDefault()
    checkInp(loginName, loginName.value.length > 3, msg.enterValidName)
    checkInp(loginPass, loginPass.value.length > 5, msg.smallPassword)
    if (
        checkInp(loginName, loginName.value.length > 3, msg.enterValidName) &&
        checkInp(loginPass, loginPass.value.length > 5, msg.smallPassword)
    ) {
        localStorage.setItem('authType', 'ChangeProfile')
        ShowHiddenBlock(
            [changeProfile],
            [signInWithLogAndPassword]
        )
    }
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
    setTimeout(()=>{
        localStorage.setItem('authType', 'Contacts')
        ShowHiddenBlock(
            [contacts],
            [signInWithECP, signInWithLogAndPassword, frgtPass]
        )
    },0)
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
function changeTitle(titleText, infoSignText = '', otherText = msg.enterWithLoginAndPassword) {
    const title = document.getElementById('title'),
        infoSignTitle = document.getElementById('infoSignTitle'),
        otherMethod = document.getElementById('otherMethod')
    title.innerHTML = titleText
    infoSignTitle.innerHTML = infoSignText
    otherMethod.innerHTML = otherText
}

function checkInp(input, condition, textError) {
    if (condition) {
        input.style.border = '1px solid #51AA4D'
        input.nextElementSibling.innerHTML = ''
        input.parentElement.querySelector('.stop').style.display = 'none'
        return true
    }
    input.style.border = '1px solid #b63535'
    input.nextElementSibling.innerHTML = textError
    input.parentElement.querySelector('.stop').style.display = 'inline-block'
    return false
}

function ShowHiddenBlock(arrShow, arrHidden) {
    arrShow.forEach(e => {
        e.classList.remove('hidden')
        e.classList.add('show')
    })
    arrHidden.forEach(e => {
        e.classList.remove('show')
        e.classList.add('hidden')
    })
}

function obs(el) {
    observer.disconnect()
    observer.observe(el, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
    })
}

obs(app)