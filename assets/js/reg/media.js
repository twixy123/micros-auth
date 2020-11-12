setTimeout(() => {
    document.getElementById('loading').classList.add('hidden')
    document.querySelector('.app_main').classList.remove('hidden')
    document.querySelector('.app_main').classList.add('show')
    regWithECP.classList.remove('hidden')
    regWithECP.classList.add('show')
    document.getElementById('appFooter').classList.remove('hidden')
    document.getElementById('appFooter').classList.add('show')
}, 2000)

