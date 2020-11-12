const app = document.getElementById('app')
localStorage.setItem('regType', 'ECP')
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
let observer = new MutationObserver(mutNode => {
    scroll(0, 50)
    if (localStorage.getItem('regType') == 'Contacts') {
        title.innerHTML = msg.technical_support
    }
    title.innerHTML = msg.registration
    infoSignTitle.innerHTML = ''
    if (localStorage.getItem('regType') == 'ECP') infoSignTitle.innerHTML = msg.choiseECPSignature
    if (!infoSignTitle.innerHTML) infoSignTitle.style.padding = '0'
    obs(app)

})
regNextBtn.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('regType', 'Login')
    ShowHiddenBlock([regWithLogAndPass], [regWithECP])
})
regPrevBtn.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('regType', 'ECP')
    ShowHiddenBlock([regWithECP], [regWithLogAndPass])
    formRegWithLogin.querySelectorAll('input').forEach(inp => {
        inp.style.border = '1px solid #C1C5C8'
        inp.parentElement.querySelector('.stop').style.display = 'none'
        inp.nextElementSibling.innerHTML = ''
        if (
            inp.getAttribute('id') == 'regLoginCompany' ||
            inp.getAttribute('id') == 'regLoginName' ||
            inp.getAttribute('id') == 'regLoginTin'
        ) return
        else inp.value = ''
    })
})
toContacts.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('regType', 'Contacts')
    ShowHiddenBlock([contacts], [regWithECP, regWithLogAndPass])
})
backToRegWithEcp.addEventListener('click', e => {
    e.preventDefault()
    ShowHiddenBlock([regWithECP], [contacts])
})
const ecpKey = document.querySelectorAll('.main__link_with_ecp')
ecpKey.forEach((key, idx, arr) => {
    key.addEventListener('click', e => {
        e.preventDefault()
        arr.forEach(keyForBG => keyForBG.style.backgroundColor = '#fff')
        key.style.backgroundColor = '#f3f9ff'
        regNextBtn.removeAttribute('disabled')

        let ecpCompanyName = key.querySelector('.ecp_company_name')
        let ecpName = key.querySelector('.ecp_name')
        let ecpTin = key.querySelector('.ecp_tin')

        if (ecpCompanyName) {
            regLoginCompany.parentElement.style.display = 'flex'
            regLoginCompany.value = ecpCompanyName.innerHTML
        } else regLoginCompany.parentElement.style.display = 'none'

        regLoginName.value = ecpName.innerHTML
        regLoginTin.value = ecpTin.innerHTML
    })
})
regLoginEmail.addEventListener('input', () => {
    let reg = /^.+@.+\..+$/i
    checkInp(regLoginEmail, regLoginEmail.value.match(reg), msg.incorrectEmail)
})
regLoginPhone.addEventListener('input', () => {
    let reg = /^(998|\+998)([\- ]?)(\(?\d{2}\)?[\- ]?)[\d\- ]{7}$/
    checkInp(
        regLoginPhone,
        regLoginPhone.value.match(reg),
        msg.incorrectPhone)
})
regLogin.addEventListener('input', () => {
    checkInp(regLogin, regLogin.value.length > 4, msg.enterValidLogin)
})
regPass.addEventListener('input', () => {
    checkInp(regPass, regPass.value.length > 5, msg.smallPassword)
    // checkPassword(regPass)
})
regCheckPass.addEventListener('input', () => {
    checkInp(regCheckPass, regCheckPass.value == regPass.value, msg.notMatchPasswords)
})
logInWithLogin.addEventListener('click', e => {
    e.preventDefault()
    const regEmail = /^.+@.+\..+$/i,
        regPhone = /(998|\+998)([\- ]?)(\(?\d{2}\)?[\- ]?)[\d\- ]{6}/,
        regPas = /(?=.*[0-9A-Z]){6,}/g
    checkInp(regLoginEmail, regLoginEmail.value.match(regEmail), msg.incorrectEmail)
    checkInp(regLoginPhone, regLoginPhone.value.match(regPhone), msg.incorrectPhone)
    checkInp(regLogin, regLogin.value.length > 4, msg.enterValidLogin)
    checkInp(regPass, regPass.value.length > 5, msg.smallPassword)
    checkInp(regCheckPass,
        (regCheckPass.value == regPass.value && regCheckPass.value.length > 5),
        msg.notMatchPasswords)
    // checkPassword(regPass)
    if (
        checkInp(regLoginEmail, regLoginEmail.value.match(regEmail), msg.incorrectEmail) &&
        checkInp(regLoginPhone, regLoginPhone.value.match(regPhone), msg.incorrectEmail) &&
        checkInp(regLogin, regLogin.value.length > 4, msg.enterValidLogin) &&
        checkInp(regPass, regPass.value.length > 5, msg.smallPassword) &&
        checkInp(regCheckPass,
            (regCheckPass.value == regPass.value && regCheckPass.value.length > 5),
            msg.notMatchPasswords)
    ) {
        location.href = location.href
    }
})
obs(app)