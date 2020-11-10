const app = document.getElementById('app')
localStorage.setItem('regType', 'ECP')

let observer = new MutationObserver(mutNode => {
    if (localStorage.getItem('regType') == 'Contacts'){
        title.innerHTML = `Texnik yordam`
    }
    title.innerHTML = `Belgilanish`
    infoSignTitle.innerHTML = ``
    if (localStorage.getItem('regType') == 'ECP') infoSignTitle.innerHTML = `Elektron raqamli imzoni tanlang`
    if (!infoSignTitle.innerHTML) infoSignTitle.style.padding = '0'
    obs(app)

})

regNextBtn.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('regType', 'Login')
    ShowHiddenBlock([regWithLogAndPass],[regWithECP])
})

regPrevBtn.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('regType', 'ECP')
    ShowHiddenBlock([regWithECP],[regWithLogAndPass])
    formRegWithLogin.querySelectorAll('input').forEach(inp=> {
        inp.style.border = '1px solid #C1C5C8'
        inp.parentElement.querySelector('.stop').style.display ='none'
        inp.nextElementSibling.innerHTML = ''
        inp.value = ''
    })
})

toContacts.addEventListener('click', e=>{
    e.preventDefault()
    localStorage.setItem('regType', 'Contacts')
    ShowHiddenBlock([contacts],[regWithECP,regWithLogAndPass])
})

backToRegWithEcp.addEventListener('click', e=>{
    e.preventDefault()
    ShowHiddenBlock([regWithECP],[contacts])
})

const ecpKey = document.querySelectorAll('.main__link_with_ecp')
ecpKey.forEach((key,idx, arr)=>{
    key.addEventListener('click', e=>{
        e.preventDefault()
        arr.forEach(keyForBG=>keyForBG.style.backgroundColor = '#fff')
        key.style.backgroundColor = '#f3f9ff'
        regNextBtn.removeAttribute('disabled')

        let ecpCompanyName = key.querySelector('.ecp_company_name')
        let ecpName = key.querySelector('.ecp_name')
        let ecpTin = key.querySelector('.ecp_tin')

        if (ecpCompanyName) {
            regLoginCompany.parentElement.style.display = 'flex'
            regLoginCompany.value = ecpCompanyName.innerHTML
        }
        else regLoginCompany.parentElement.style.display = 'none'

        regLoginName.value = ecpName.innerHTML
        regLoginTin.value = ecpTin.innerHTML
    })
})

regLoginEmail.addEventListener('input', ()=>{
    let reg = /^.+@.+\..+$/i
    checkInp(regLoginEmail, regLoginEmail.value.match(reg), `Email maydoni noto'g'ri kiritilgan`)
})

regLoginPhone.addEventListener('input', ()=>{
    let reg = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/
    checkInp(regLoginPhone, regLoginPhone.value.match(reg), `Email maydoni noto'g'ri kiritilgan`)
})

regLogin.addEventListener('input', ()=>{
    checkInp(regLogin, regLogin.value.length > 4, `Yaroqli foydalanuvchi nomini kiriting`)
})

regPass.addEventListener('input', ()=>{
    checkPassword(regPass)
})

regCheckPass.addEventListener('input', ()=>{
    checkInp(regCheckPass,regCheckPass.value == regPass.value, `Parollar mos kelmayapti`)
})

logInWithLogin.addEventListener('click', e=>{
    e.preventDefault()
    const regEmail = /^.+@.+\..+$/i,
          regPhone = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/,
          regPas = /(?=.*[A-Z])[0-9A-Z]{6,}/g
    checkInp(regLoginEmail, regLoginEmail.value.match(regEmail), `Email maydoni noto'g'ri kiritilgan`)
    checkInp(regLoginPhone, regLoginPhone.value.match(regPhone), `Email maydoni noto'g'ri kiritilgan`)
    checkInp(regLogin, regLogin.value.length > 4, `Yaroqli foydalanuvchi nomini kiriting`)
    checkPassword(regPass)
    if (
        checkInp(regLoginEmail, regLoginEmail.value.match(regEmail), `Email maydoni noto'g'ri kiritilgan`) &&
        checkInp(regLoginPhone, regLoginPhone.value.match(regPhone), `Email maydoni noto'g'ri kiritilgan`) &&
        checkInp(regLogin, regLogin.value.length > 4, `Yaroqli foydalanuvchi nomini kiriting`) &&
        checkPassword(regPass) &&
        checkInp(regCheckPass,regCheckPass.value == regPass.value, `Parollar mos kelmayapti`)
    ){location.href = location.href}
})

function checkPassword(input) {
    let symbols = document.getElementById('symbols6')
    let letters = document.getElementById('letters')
    let numbers = document.getElementById('numbers')
    let regPasFull = /(?=.*[A-Z])[0-9A-Z]{6,}/g
    let regPasLetters = /(?=.*[A-Z])/g
    let regPasNum = /(?=.*[0-9])/g

    symbols.innerHTML = `Parol kamida 6 ta belgidan iborat bo'lishi kerak`
    letters.innerHTML = `Parolda katta lotin harflari bo'lishi kerak`
    numbers.innerHTML = `Parolda raqamlar bo'lishi kerak`
    symbols.style = 'color: #b63535; padding: 5px 0;'
    letters.style = 'color: #b63535; padding: 5px 0;'
    numbers.style = 'color: #b63535; padding: 5px 0;'
    input.style.border = '1px solid #b63535'
    input.parentElement.querySelector('.stop').style.display = 'inline-block'

    if (input.value.length > 5){
        symbols.style.color = '#51AA4D'
    }
    if (input.value.match(regPasLetters)){
        letters.style.color = '#51AA4D'
    }
    if (input.value.match(regPasNum)){
        numbers.style.color = '#51AA4D'
    }
    if (input.value.match(regPasFull)){
        input.style.border = '1px solid #51AA4D'
        input.parentElement.querySelector('.stop').style.display = 'none'
        symbols.innerHTML = ''
        letters.innerHTML = ''
        numbers.innerHTML = ''
        letters.style = 'padding: 0;'
        numbers.style = 'padding: 0;'
        return true
    }
    return false
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