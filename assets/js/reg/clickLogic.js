const app = document.getElementById('app')
localStorage.setItem('regType', 'ECP')

let observer = new MutationObserver(mutNode => {
    if (localStorage.getItem('regType') == 'Contacts'){
        title.innerHTML = 'Техническая поддержка'
    }
    title.innerHTML = 'Регистрация'
    infoSignTitle.innerHTML = ''
    if (!infoSignTitle.innerHTML) infoSignTitle.style.padding = '0'
    obs(app)

})

regNextBtn.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('regType', 'Login')
    regWithECP.classList.add('hidden')
    regWithECP.classList.remove('show')
    regWithLogAndPass.classList.add('show')
    regWithLogAndPass.classList.remove('hidden')
})

regPrevBtn.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('regType', 'ECP')
    regWithECP.classList.remove('hidden')
    regWithECP.classList.add('show')
    regWithLogAndPass.classList.remove('show')
    regWithLogAndPass.classList.add('hidden')
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
    regWithECP.classList.remove('show')
    regWithECP.classList.add('hidden')
    regWithLogAndPass.classList.remove('show')
    regWithLogAndPass.classList.add('hidden')
    contacts.classList.remove('hidden')
    contacts.classList.add('show')
})

backToRegWithEcp.addEventListener('click', e=>{
    e.preventDefault()
    contacts.classList.remove('show')
    contacts.classList.add('hidden')
    regWithECP.classList.remove('hidden')
    regWithECP.classList.add('show')
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
    check(regLoginEmail.value.match(reg), regLoginEmail, 'Неккоректно заполнено поле')
})

regLoginPhone.addEventListener('input', ()=>{
    let reg = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/
    check(regLoginPhone.value.match(reg), regLoginPhone, 'Неккоректно введено поле')
})

regLogin.addEventListener('input', ()=>{
    check(regLogin.value, regLogin, 'Введите логин')
})

regPass.addEventListener('input', ()=>{
    if (regPass.value.length > 5) regCheckPass.removeAttribute('disabled')
    check((regPass.value.length > 5), regPass, 'Пароль должен быть не меньше 6 символов')
})

regCheckPass.addEventListener('input', ()=>{
    check((regCheckPass.value == regPass.value), regCheckPass, 'Пароли не совпадают')
})



function check(check, input, text, btn = logInWithLogin){
    if (check){
        input.style.border = '1px solid #C1C5C8'
        input.removeAttribute('required')
        input.nextElementSibling.innerHTML = ''
        input.parentElement.querySelector('.stop').style.display = 'none'
    } else {
        input.style.border = '1px solid #b63535'
        input.setAttribute('required', 'required')
        input.nextElementSibling.innerHTML = text
        input.parentElement.querySelector('.stop').style.display = 'inline-block'
    }

    if (
        regLoginEmail.value &&
        regLoginPhone.value &&
        regLogin.value &&
        regPass.value &&
        (regPass.value === regCheckPass.value))
        btn.removeAttribute('disabled')
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