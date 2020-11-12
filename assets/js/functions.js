function addInnerHTML(idElem, text){
    idElem.forEach(e=>e.innerHTML = text)
}

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

function maxHeightForUl() {
    const mainListWithEcp = document.querySelectorAll('.main__list_with_ecp'),
        mainMenuWithEcp = document.querySelector('.main__menu_with_ecp')
    if (document.body.clientHeight > 999) {
        mainMenuWithEcp.style.maxHeight = ((mainListWithEcp[0].clientHeight * 4) + 11) + 'px'
    } else if (document.body.clientHeight > 850) {
        mainMenuWithEcp.style.maxHeight = ((mainListWithEcp[0].clientHeight * 3) + 11) + 'px'
    } else if (document.body.clientHeight < 850) {
        mainMenuWithEcp.style.maxHeight = '100%'
    }
}

function renderUserLogin(){
    authSignInUsers.textContent = ''
    const userGet = JSON.parse(localStorage.getItem('user'))
    userGet.forEach(usg=>{
        const user = `
                <li class="main__list_with_ecp listUserLogin">
                    <input type="hidden" name="userId" value="${usg.id}" class="usID">
                    <input type="hidden" name="check" value="notChecked" class="authUserCheck">
                    <a href="#" class="main__link_with_ecp userKeyLogin">
                        <span class="logo">
                          <i class="far fa-user-circle"></i>
                        </span>
                        <span class="details userDetail">
                            <span class="userName">${usg.login}</span>
                            <span>${msg.lastTimeOnline}<span class="userDateLast">${usg.date}</span></span>
                        </span>
                    </a>
                </li>
                            `
        authSignInUsers.insertAdjacentHTML('beforeend', user)
    })
    authSignInLogin.setAttribute('data-use', 'key')
    authSignInUsers.setAttribute('data-method', 'login')
    ShowHiddenBlock(
        [authSignInUsersblock],
        [authSignInNoUsersLogin]
    )
    let listUser = authSignInUsers.querySelectorAll('.listUserLogin')
    listUser.forEach(el=>{
        el.querySelector('.authUserCheck').value = 'notChecked'
        let usID = el.querySelector('.usID').value
        el.querySelector('.userKeyLogin').addEventListener('click', e => {
            e.preventDefault()
            if (authSignInUsers.getAttribute('data-method') == 'delete'){
                let newUsers = userGet.filter(e=>e.id !== +usID)
                localStorage.setItem('user', JSON.stringify(newUsers))
                renderUserLogin()
                return
            }
            let userPassword = userGet.find(e=>e.id == usID).password
            let userName = userGet.find(e=>e.id == usID).login
            el.querySelector('.authUserCheck').value = 'checked'
            chooseUserName.innerHTML = userName
            loginPass.value = userPassword
            ShowHiddenBlock(
                [authSignInPassword],
                [authSignInLogin]
            )
        })
    })

}

/* эта Функция будет нужна если Виктор снова захочет сделать тройную проверку на пароль при регистрации

function checkPassword(input) {
    let symbols = document.getElementById('symbols6')
    let letters = document.getElementById('letters')
    let numbers = document.getElementById('numbers')
    let regPasFull = /(?=.*[A-Z])[0-9A-Z]{6,}/g
    let regPasLetters = /(?=.*[A-Z])/g
    let regPasNum = /(?=.*[0-9])/g

    symbols.innerHTML = msg.smallPassword'
    letters.innerHTML = 'Пароль должен содержать заглавные латинского алфавита буквы'
    numbers.innerHTML = 'Пароль должен содержать цифры'
    symbols.style = 'color: #b63535; padding: 5px 0;'
    letters.style = 'color: #b63535; padding: 5px 0;'
    numbers.style = 'color: #b63535; padding: 5px 0;'
    input.style.border = '1px solid #b63535'
    input.parentElement.querySelector('.stop').style.display = 'inline-block'

    if (input.value.length > 5) {
        symbols.style.color = '#51AA4D'
    }
    if (input.value.match(regPasLetters)) {
        letters.style.color = '#51AA4D'
    }
    if (input.value.match(regPasNum)) {
        numbers.style.color = '#51AA4D'
    }
    if (input.value.match(regPasFull)) {
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
}*/

