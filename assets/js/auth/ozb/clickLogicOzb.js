const app = document.getElementById('app')
localStorage.setItem('authType', 'ECP')

let observer = new MutationObserver(mutNode => {
    if (localStorage.getItem('authType') == 'ECP') {
        changeTitle(
            'Tizimga kirish',
            'Davlat soliq qo\'mitasi tomonidan berilgan elektron raqamli imzo bilan tizimga kiring'
        )
    } else if (localStorage.getItem('authType') == 'Login') {
        changeTitle(
            'Tizimga kirish',
            'Foydalanuvchi nomi va parolingiz bilan kiring',
            'ECP kaliti bilan tizimga kiring'
        )
    } else if (localStorage.getItem('authType') == 'ChangeProfile') {
        changeTitle(
            'Profilni tanlash',
            'Iltimos, tizimga kirmoqchi bo\'lgan profilni tanlang',
            'ECP kaliti bilan tizimga kiring'
        )
    } else if (localStorage.getItem('authType') == 'ForgotPassword') {
        changeTitle(
            'Tizimga kirish',
            'Parolni unutdingizmi'
        )
    } else if (localStorage.getItem('authType') == 'Contacts') {
        changeTitle(
            'Texnik yordam'
        )
    } else if (localStorage.getItem('authType') == 'ForgotPassword') {
        changeTitle(
            'Parolni unutdingizmi?'
        )
    } else if (localStorage.getItem('authType') == 'ToMailSended') {
        changeTitle(
            'Elektron pochtangizni tekshiring'
        )
    } else if (localStorage.getItem('authType') == 'SendToMail') {
        changeTitle(
            'Kalit so\'zni o\'zgartirish'
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
    }
    if (localStorage.getItem('authType') == 'ECP') {
        localStorage.setItem('authType', 'Login')
        ShowHiddenBlock(
            [signInWithLogAndPass],
            [signInWithECP]
        )
    }
    if (localStorage.getItem('authType') == 'ChangeProfile') {
        localStorage.setItem('authType', 'ECP')
        ShowHiddenBlock(
            [signInWithECP],
            [changeProfile]
        )
    }
    if (localStorage.getItem('authType') == 'ForgotPassword') {
        localStorage.setItem('authType', 'Login')
        ShowHiddenBlock(
            [signInWithLogAndPass],
            [frgtPass]
        )
    }
    if (localStorage.getItem('authType') == 'Contacts') {
        localStorage.setItem('authType', 'Login')
        ShowHiddenBlock(
            [signInWithLogAndPass],
            [contacts]
        )
    }
    if (localStorage.getItem('authType') == 'ForgotPassword') {
        localStorage.setItem('authType', 'Login')
        ShowHiddenBlock(
            [signInWithLogAndPass],
            [frgtPass]
        )
    }
    if (localStorage.getItem('authType') == 'ToMailSended') {
        localStorage.setItem('authType', 'Login')
        ShowHiddenBlock(
            [signInWithLogAndPass, document.querySelector('.or_block')],
            [checkYourEmail]
        )
        forgotEmailInp.style.border = `1px solid #C1C5C8`
    }
})

logInWithLogin.addEventListener('click', e=>{
    e.preventDefault()
    checkInp(loginName, loginName.value.length > 3, 'Yaroqli ismni kiriting')
    checkInp(loginPass, loginPass.value.length > 5, `Parol kamida 6 ta belgidan iborat bo'lishi kerak`)
    if (
        checkInp(loginName, loginName.value.length > 3, 'Yaroqli ismni kiriting') &&
        checkInp(loginPass, loginPass.value.length > 5, `Parol kamida 6 ta belgidan iborat bo'lishi kerak`)
    ){
        localStorage.setItem('authType', 'ChangeProfile')
        ShowHiddenBlock(
            [changeProfile],
            [signInWithLogAndPass]
        )
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
    if (checkInp(forgotEmailInp, forgotEmailInp.value.match(reg), 'Email maydoni noto\'g\'ri kiritilgan')) {
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
    checkInp(loginName, loginName.value.length > 3, 'Yaroqli ismni kiriting')
})

loginPass.addEventListener('input', () => {
    checkInp(loginPass, loginPass.value.length > 5, `Parol kamida 6 ta belgidan iborat bo'lishi kerak`)
})

forgotEmailInp.addEventListener('input', ()=>{
    let reg = /^.+@.+\..+$/i
    checkInp(forgotEmailInp, forgotEmailInp.value.match(reg), 'Email maydoni noto\'g\'ri kiritilgan')
})
//ниже код для смены пароля
changePassword.addEventListener('click', e => {
    e.preventDefault()
    let inp = trueEmail.value
    if (
        checkInp(newPassword, newPassword.value.length > 5, `Parol kamida 6 ta belgidan iborat bo'lishi kerak`) &&
        checkInp(checkNewPassword, checkNewPassword.value === newPassword.value, 'Parollar mos kelmayapti')
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
    checkInp(newPassword, newPassword.value.length > 5, `Parol kamida 6 ta belgidan iborat bo'lishi kerak`)
})

checkNewPassword.addEventListener('input', () => {
    checkInp(checkNewPassword, checkNewPassword.value === newPassword.value, 'Parollar mos kelmayapti')
})
//выше код для смены пароля
function changeTitle(titleText, infoSignText = '', otherText = 'Kirish va parol bilan kirish') {
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
