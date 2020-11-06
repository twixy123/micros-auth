const app = document.getElementById('app')
localStorage.setItem('type', 'ECP')

let observer = new MutationObserver(mutNode => {
    if (localStorage.getItem('type') == 'ECP') {
        title.innerHTML = 'Авторизация'
        infoSignTitle.innerHTML =
            'Авторизоваться с помощью электронной цифровой подписи выданной государственным налоговым комитетом'
        otherMethod.innerHTML = 'Войти при помощи логина и пароля'
        obs(app)
    }
    if (localStorage.getItem('type') == 'Login') {
        title.innerHTML = 'Авторизация'
        infoSignTitle.innerHTML = 'Авторизоваться с помощью логина и пароля'
        otherMethod.innerHTML = 'Войти при помощи ключа ЭЦП'
        obs(app)

        setTimeout(() => {
            document.forms.formLogInWithLogin.addEventListener('submit', e => {
                e.preventDefault()
                if (loginName.value && loginPass.value) {
                    loginName.style.border = `1px solid #c1c5c8`
                    loginPass.style.border = `1px solid #c1c5c8`
                    loginName.nextElementSibling.innerHTML = ''
                    loginPass.nextElementSibling.innerHTML = ''
                    loginPass.parentElement.querySelector('.stop').style.display = 'none'
                    loginName.parentElement.querySelector('.stop').style.display = 'none'
                    location.href = location.href
                } else {
                    if (!loginName.value) {
                        loginName.style.border = `1px solid #b63535`
                        loginName.parentElement.querySelector('.stop').style.display = 'inline-block'
                        loginName.nextElementSibling.innerHTML = 'Введите имя'
                    }
                    if (!loginPass.value) {
                        loginPass.style.border = `1px solid #b63535`
                        loginPass.parentElement.querySelector('.stop').style.display = 'inline-block'
                        loginPass.nextElementSibling.innerHTML = 'Пароль должен быть не меньше 6 символов'
                    }
                }
            })
        }, 0)
    }
    if (localStorage.getItem('type') == 'ForgotPassword') {
        title.innerHTML = 'Авторизация'
        infoSignTitle.innerHTML = 'Забыли пароль'
        otherMethod.innerHTML = 'Войти при помощи логина и пароля'
        obs(app)
    }
    if (localStorage.getItem('type') == 'Contacts') {
        title.innerHTML = 'Техническая поддержка'
        infoSignTitle.innerHTML = ''
        otherMethod.innerHTML = 'Войти при помощи логина и пароля'
        obs(app)
    }
    if (localStorage.getItem('type') == 'ForgotPassword') {
        title.innerHTML = 'Забыли пароль?'
        infoSignTitle.innerHTML = ''
        otherMethod.innerHTML = 'Войти при помощи логина и пароля'
        obs(app)
    }
    if (localStorage.getItem('type') == 'ToMailSended') {
        title.innerHTML = 'Обновите пароль'
        infoSignTitle.innerHTML = ''
        otherMethod.innerHTML = 'Войти при помощи логина и пароля'
        obs(app)
    }
    if (localStorage.getItem('type') == 'SendToMail') {
        title.innerHTML = 'Проверьте почту'
        infoSignTitle.innerHTML = ''
        otherMethod.innerHTML = 'Войти при помощи логина и пароля'
        obs(app)
    }
})

otherMethod.addEventListener('click', e => {
    e.preventDefault()
    if (localStorage.getItem('type') == 'ECP') {
        localStorage.setItem('type', 'Login')
        signInWithECP.classList.remove('show')
        signInWithECP.classList.add('hidden')
        signInWithLogAndPass.classList.remove('hidden')
        signInWithLogAndPass.classList.add('show')
    } else if (localStorage.getItem('type') == 'Login') {
        setTimeout(() => {
            // maxHeightForUl()
        }, 0)
        localStorage.setItem('type', 'ECP')
        signInWithLogAndPass.classList.remove('show')
        signInWithLogAndPass.classList.add('hidden')
        signInWithECP.classList.add('show')
        signInWithECP.classList.remove('hidden')
    } else if (localStorage.getItem('type') == 'ForgotPassword') {
        localStorage.setItem('type', 'Login')
        frgtPass.classList.remove('show')
        frgtPass.classList.add('hidden')
        signInWithLogAndPass.classList.add('show')
        signInWithLogAndPass.classList.remove('hidden')
    } else if (localStorage.getItem('type') == 'Contacts') {
        localStorage.setItem('type', 'Login')
        contacts.classList.remove('show')
        contacts.classList.add('hidden')
        signInWithLogAndPass.classList.add('show')
        signInWithLogAndPass.classList.remove('hidden')
    } else if (localStorage.getItem('type') == 'ForgotPassword') {
        localStorage.setItem('type', 'Login')
        frgtPass.classList.remove('show')
        frgtPass.classList.add('hidden')
        signInWithLogAndPass.classList.add('show')
        signInWithLogAndPass.classList.remove('hidden')
    } else if (localStorage.getItem('type') == 'SendToMail') {
        localStorage.setItem('type', 'Login')
        changePass.classList.remove('show')
        changePass.classList.add('hidden')
        signInWithLogAndPass.classList.add('show')
        signInWithLogAndPass.classList.remove('hidden')
    } else if (localStorage.getItem('type') == 'ToMailSended') {
        localStorage.setItem('type', 'Login')
        checkYourEmail.classList.remove('show')
        checkYourEmail.classList.add('hidden')
        signInWithLogAndPass.classList.add('show')
        signInWithLogAndPass.classList.remove('hidden')
    }
})

forgotPassword.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('type', 'ForgotPassword')
    frgtPass.classList.add('show')
    frgtPass.classList.remove('hidden')
    signInWithLogAndPass.classList.remove('show')
    signInWithLogAndPass.classList.add('hidden')
})

changePassword.addEventListener('click', e=>{
    e.preventDefault()
    let inp = trueEmail.value
    sendToMail.setAttribute('href', 'http://' + inp)
    newPassword.value = ''
    checkNewPassword.value = ''
    localStorage.setItem('type', 'ToMailSended')
    changePass.classList.add('hidden')
    changePass.classList.remove('show')
    checkYourEmail.classList.add('show')
    checkYourEmail.classList.remove('hidden')

})

forgotPass.addEventListener('click', e => {
    e.preventDefault()
    let inp = forgotEmailInp.value
    forgotEmailInp.value = ''
    localStorage.setItem('type', 'SendToMail')
    frgtPass.classList.add('hidden')
    frgtPass.classList.remove('show')
    changePass.classList.add('show')
    changePass.classList.remove('hidden')
    trueEmail.value = inp;
    forgotPass.setAttribute('disabled', 'disabled')
    changePassword.setAttribute('disabled', 'disabled')
    newPassword.value = ''
    checkNewPassword.value = ''
})

toContacts.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('type', 'Contacts')
    contacts.classList.add('show')
    contacts.classList.remove('hidden')
    signInWithECP.classList.remove('show')
    signInWithECP.classList.add('hidden')
    signInWithLogAndPass.classList.remove('show')
    signInWithLogAndPass.classList.add('hidden')
    frgtPass.classList.remove('show')
    frgtPass.classList.add('hidden')
})

backToAuthLogin.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('type', 'Login')
    frgtPass.classList.remove('show')
    frgtPass.classList.add('hidden')
    signInWithLogAndPass.classList.add('show')
    signInWithLogAndPass.classList.remove('hidden')
})

forgotEmailInp.addEventListener('input', () => {
    let inp = forgotEmailInp.value,
        reg = /^.+@.+\..+$/i
    if (inp.match(reg)) {
        forgotEmailInp.style.border = '1px solid #C1C5C8'
        forgotPass.removeAttribute('disabled')
    } else {
        forgotEmailInp.style.border = '1px solid #b63535'
        forgotPass.setAttribute('disabled', 'disabled')
    }
})

newPassword.addEventListener('input', ()=>{
    newPassword.style.border = '1px solid #b63535'
    newPassword.nextElementSibling.innerHTML = 'Пароль должен быть не меньше 6 символов'
    if (newPassword.value.length > 5){
        newPassword.style.border = '1px solid #51AA4D'
        newPassword.nextElementSibling.innerHTML = ''
    }
})

checkNewPassword.addEventListener('input', ()=>{
    changePassword.setAttribute('disabled', 'disabled')
    checkNewPassword.style.border = '1px solid #b63535'
    checkNewPassword.nextElementSibling.innerHTML = 'Пароли не совпадают'
    if (checkNewPassword.value === newPassword.value){
        checkNewPassword.style.border = '1px solid #51AA4D'
        checkNewPassword.nextElementSibling.innerHTML = ''
        changePassword.removeAttribute('disabled')
    }
})

loginName.addEventListener('input', ()=>{
    loginName.style.border = '1px solid #b63535'
    loginName.nextElementSibling.innerHTML = 'Введите имя'
    loginName.parentElement.querySelector('.stop').style.display = 'inline-block'
    if (loginName.value){
        loginName.style.border = '1px solid #51AA4D'
        loginName.nextElementSibling.innerHTML = ''
        loginName.parentElement.querySelector('.stop').style.display = 'none'
    }
})

loginPass.addEventListener('input', ()=>{
    loginPass.style.border = '1px solid #b63535'
    loginPass.nextElementSibling.innerHTML = 'Пароль должен быть не меньше 6 символов'
    loginPass.parentElement.querySelector('.stop').style.display = 'inline-block'
    if (loginPass.value.length > 5){
        loginPass.style.border = '1px solid #51AA4D'
        loginPass.nextElementSibling.innerHTML = ''
        loginPass.parentElement.querySelector('.stop').style.display = 'none'
    }
})


function obs(el) {
    observer.disconnect()
    observer.observe(el, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
    })
}

obs(app)