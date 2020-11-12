setTimeout(() => {
    document.getElementById('loading').classList.add('hidden')
    document.querySelector('.app_main').classList.remove('hidden')
    document.querySelector('.app_main').classList.add('show')
    if (localStorage.getItem('authFromWhere')) localStorage.removeItem('authFromWhere')
    if (localStorage.getItem('authType')){
        if (localStorage.getItem('authType') == 'ECP'){
            signInWithECP.classList.remove('hidden')
            signInWithECP.classList.add('show')
        } else{
            localStorage.setItem('authType', 'Login')
            signInWithLogAndPassword.classList.remove('hidden')
            signInWithLogAndPassword.classList.add('show')
        }
    }else{
        localStorage.setItem('authType', 'ECP')
        signInWithECP.classList.remove('hidden')
        signInWithECP.classList.add('show')
    }
    document.getElementById('appFooter').classList.remove('hidden')
    document.getElementById('appFooter').classList.add('show')
}, 2000)

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

