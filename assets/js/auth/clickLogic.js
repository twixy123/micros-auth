const app = document.getElementById('app')
localStorage.setItem('authType', 'ECP')

let observer = new MutationObserver(mutNode => {
    if (localStorage.getItem('authType') == 'ECP') {
        changeTitle(
            'Вход в систему',
            'Авторизоваться с помощью электронной цифровой подписи выданной государственным налоговым комитетом'
        )
    } else if (localStorage.getItem('authType') == 'Login') {
        changeTitle(
            'Вход в систему',
            'Авторизоваться с помощью логина и пароля',
            'Войти при помощи ключа ЭЦП'
        )
    } else if (localStorage.getItem('authType') == 'ForgotPassword') {
        changeTitle(
            'Вход в систему',
            'Забыли пароль'
        )
    } else if (localStorage.getItem('authType') == 'Contacts') {
        changeTitle(
            'Техническая поддержка'
        )
    } else if (localStorage.getItem('authType') == 'ForgotPassword') {
        changeTitle(
            'Забыли пароль?'
        )
    } else if (localStorage.getItem('authType') == 'ToMailSended') {
        changeTitle(
            'Проверьте почту'
        )
    } else if (localStorage.getItem('authType') == 'SendToMail') {
        changeTitle(
            'Сменить пароль'
        )
    }
    if (!infoSignTitle.innerHTML) infoSignTitle.style.padding = '0'
    else infoSignTitle.style.padding = '15px 30px 0'
    obs(app)
})

otherMethod.addEventListener('click', e => {
    e.preventDefault()
    if (localStorage.getItem('authType') == 'Login') {
        localStorage.setItem('authType', 'ECP')
        ShowHiddenBlock(
            [signInWithECP],
            [signInWithLogAndPass]
        )
        return
    } else if (localStorage.getItem('authType') == 'ECP') {
        ShowHiddenBlock(
            [signInWithLogAndPass],
            [signInWithECP]
        )
    } else if (localStorage.getItem('authType') == 'ForgotPassword') {
        ShowHiddenBlock(
            [signInWithLogAndPass],
            [frgtPass]
        )
    } else if (localStorage.getItem('authType') == 'Contacts') {
        ShowHiddenBlock(
            [signInWithLogAndPass],
            [contacts]
        )
    } else if (localStorage.getItem('authType') == 'ForgotPassword') {
        ShowHiddenBlock(
            [signInWithLogAndPass],
            [frgtPass]
        )
    } else if (localStorage.getItem('authType') == 'ToMailSended') {
        ShowHiddenBlock(
            [signInWithLogAndPass, document.querySelector('.or_block')],
            [checkYourEmail]
        )
        forgotEmailInp.style.border = `1px solid #C1C5C8`
    }
    localStorage.setItem('authType', 'Login')
})

logInWithLogin.addEventListener('click', e=>{
    e.preventDefault()
    if (
        checkInp(loginName, loginName.value, 'Введите имя') &&
        checkInp(loginPass, loginPass.value.length > 5, 'Пароль должен быть не меньше 6 символов')
    ){
        location.href = location.href
    }
})

forgotPassword.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('authType', 'ForgotPassword')
    ShowHiddenBlock(
        [frgtPass],
        [signInWithLogAndPass]
    )
})

forgotPass.addEventListener('click', e => {
    e.preventDefault()
    let inp = forgotEmailInp.value,
        reg = /^.+@.+\..+$/i
    if (checkInp(forgotEmailInp, forgotEmailInp.value.match(reg), 'Неккоректно введено поле Email')) {
        forgotEmailInp.value = ''
        localStorage.setItem('authType', 'ToMailSended')
        ShowHiddenBlock(
            [checkYourEmail],
            [frgtPass, document.querySelector('.or_block')]
        )
    }
})

toContacts.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('authType', 'Contacts')
    ShowHiddenBlock(
        [contacts],
        [signInWithECP, signInWithLogAndPass, frgtPass]
    )
})

backToAuthLogin.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('authType', 'Login')
    ShowHiddenBlock(
        [signInWithLogAndPass],
        [frgtPass]
    )
})

loginName.addEventListener('input', () => {
    checkInp(loginName, loginName.value, 'Введите имя')
})

loginPass.addEventListener('input', () => {
    checkInp(loginPass, loginPass.value.length > 5, 'Пароль должен быть не меньше 6 символов')
})

forgotEmailInp.addEventListener('input', ()=>{
    let reg = /^.+@.+\..+$/i
    checkInp(forgotEmailInp, forgotEmailInp.value.match(reg), 'Неккоректно введено поле Email')
})

document.body.addEventListener('click', ({target}) => {
    if (target.getAttribute('id')) {
        if (target.getAttribute('id') != 'changeLang') {
            setTimeout(() => {
                langSpan.classList.remove('active')
            }, 0)
        }
    }
})

changeLang.addEventListener('click', () => {
    langSpan.classList.toggle('active')
})
//ниже код для смены пароля
changePassword.addEventListener('click', e => {
    e.preventDefault()
    let inp = trueEmail.value
    if (
        checkInp(newPassword, newPassword.value.length > 5, 'Пароль далжен быть не меньше 6 символов') &&
        checkInp(checkNewPassword, checkNewPassword.value === newPassword.value, 'Пароли не совпадают')
    ){
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
    checkInp(newPassword, newPassword.value.length > 5, 'Пароль должен быть не меньше 6 символов')
})

checkNewPassword.addEventListener('input', () => {
    checkInp(checkNewPassword, checkNewPassword.value === newPassword.value, 'Пароли не совпадают')
})
//выше код для смены пароля
function changeTitle(titleText, infoSignText = '', otherText = 'Войти при помощи логина и пароля') {
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