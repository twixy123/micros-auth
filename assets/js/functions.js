const awaitLoadForWindow = () => {
    const arrKeys = [
        {
            orgName: 'ASPEKT OILAVIY KORXONA',
            directorName: 'ЯДЫКОВА ТАТЬЯНА КОНСТАТИНОВНА',
            tin: '302654054',
            fromTo: '15.07.2019 - 15.07.2021'
        },
        {
            orgName: 'MICROS DEVELOPMENT XK',
            directorName: 'ВЕКСЛЕР АЛЕКСАНДР СЕМЕНОВИЧ',
            tin: '302738051',
            fromTo: '09.11.2018 - 09.11.2020'
        },
        {
            orgName: 'SIMPLE GAMES MCHJ',
            directorName: 'GALIAXMEDOVA KAMILA RAFISOVNA',
            tin: '305015214',
            fromTo: '30.11.2019 - 20.11.2021'
        },
        {
            orgName: null,
            directorName: 'ВЕКСЛЕР ВИКТОР АЛЕКСАНДРОВИЧ',
            tin: '487007226',
            fromTo: '21.07.2020 - 21.07.2022'
        },
    ]
    return new Promise(r => setTimeout(() => r(), 1000)).then(() => {
        return arrKeys
    })
}

async function render() {
    let arr = await awaitLoadForWindow()
    console.log('App start...')
    if (location.href.includes('registration.')) {
        renderAppReg(arr)
    } else {
        renderAppAuth(arr)
    }
}

function renderKeys(data) {
    data.forEach(key => {
        const list = `
                        <li class="main__list_with_ecp">
                            <a href="!#" class="main__link_with_ecp ecp__keys">
                                <span class="logo">
                                ${key.orgName ? `<i class="far fa-building"></i>` : `<i class="far fa-user-circle"></i>`}
                                </span>
                                <span class="details">
                                ${key.orgName ? `<span class="ecp_company_name">${key.orgName}</span>` : ''}
                                  <span class="ecp_name">${key.directorName}</span>
                                  <span class="ecp_tin">${key.tin}</span>
                                </span>
                                <span class="ecp_info">
                                  <i class="fas fa-info-circle"></i>
                                  <span class="ecp_info__text">
                                      <span class="validate_ECP">${msg.certificate_validity_period}:</span>
                                      <span class="validate_date_ECP">${key.fromTo}</span>
                                  </span>
                                </span>
                            </a>
                        </li>
                    `
        keysAuth.insertAdjacentHTML('beforeend', list)
    })
    ShowHiddenBlock(
        [keysAuth],
        [notFoundKeys]
    )
}

async function renderAppAuth(data) {
    if (localStorage.getItem('authFromWhere')) localStorage.removeItem('authFromWhere')
    // data = [] //показать типа ключей нет
    if (data.length > 0) {
        await renderKeys(data)
    } else {
        await ShowHiddenBlock(
            [notFoundKeys],
            [keysAuth]
        )
    }
    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).length > 0) {
        await renderUserLogin()
    } else {
        await ShowHiddenBlock(
            [authSignInNoUsersLogin],
            [authSignInUsersblock]
        )
    }
    if (localStorage.getItem('authType')) {
        if (localStorage.getItem('authType') == 'ECP') {
            await ShowHiddenBlock([signInWithECP], [])
        } else {
            localStorage.setItem('authType', 'Login')
            await ShowHiddenBlock([signInWithLogAndPassword], [])
        }
    } else {
        localStorage.setItem('authType', 'ECP')
        await ShowHiddenBlock([signInWithECP], [])
    }
    await renderTitleAuth()
    var scriptClick = document.createElement('script')
    scriptClick.setAttribute('src', 'assets/js/auth/clickLogic.js')
    document.body.insertAdjacentElement('beforeend', scriptClick)

    setTimeout(() => {
        ShowHiddenBlock(
            [document.getElementById('appFooter'), document.querySelector('.app_main')],
            [document.getElementById('loading')]
        )
    }, 1000)
}

function renderAppReg(data) {
    if (data.length > 0) {
        renderKeys(data)
    } else {
        ShowHiddenBlock(
            [notFoundKeys],
            [keysAuth]
        )
    }
    renderTitleReg()
    var scriptClick = document.createElement('script')
    scriptClick.setAttribute('src', 'assets/js/reg/clickLogic.js')
    document.body.insertAdjacentElement('beforeend', scriptClick)
    setTimeout(() => {
        ShowHiddenBlock(
            [document.querySelector('.app_main'), regWithECP, document.getElementById('appFooter')],
            [document.getElementById('loading')]
        )
    }, 1000)
}

function addInnerHTML(idElem, text) {
    idElem.forEach(e => e.innerHTML = text)
}

function changeTitle(titleText, infoSignText = '', otherText = msg.enterWithLoginAndPassword) {
    const title = document.getElementById('title'),
        infoSignTitle = document.getElementById('infoSignTitle'),
        otherMethod = document.getElementById('otherMethod')
    title.innerHTML = titleText
    infoSignTitle.innerHTML = infoSignText
    otherMethod.innerHTML = otherText
}

function renderTitleAuth() {
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
            msg.pleaseChoiseProfileToAuthorized
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
}

function renderTitleReg() {
    if (localStorage.getItem('regType') == 'Contacts') {
        title.innerHTML = msg.technical_support
    }
    title.innerHTML = msg.registration
    infoSignTitle.innerHTML = ''
    if (localStorage.getItem('regType') == 'ECP') infoSignTitle.innerHTML = msg.choiseECPSignature
    if (!infoSignTitle.innerHTML) infoSignTitle.style.padding = '0'
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

function renderUserLogin() {
    authSignInUsers.textContent = ''
    const userGet = JSON.parse(localStorage.getItem('user'))
    userGet.forEach(usg => {
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
    listUser.forEach(el => {
        el.querySelector('.authUserCheck').value = 'notChecked'
        let usID = el.querySelector('.usID').value
        el.querySelector('.userKeyLogin').addEventListener('click', e => {
            e.preventDefault()
            if (authSignInUsers.getAttribute('data-method') == 'delete') {
                let newUsers = userGet.filter(e => e.id !== +usID)
                localStorage.setItem('user', JSON.stringify(newUsers))
                delUser.querySelector('i').style.color = '#777777'
                renderUserLogin()
                return
            }
            let userPassword = userGet.find(e => e.id == usID).password
            let userName = userGet.find(e => e.id == usID).login
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

