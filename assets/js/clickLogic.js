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
          loginPass.parentElement.querySelector('.stop').style.display = 'none'
          loginName.parentElement.querySelector('.stop').style.display = 'none'
          location.href = location.href
        } else {
          if (!loginName.value) {
            loginName.style.border = `1px solid #b63535`
            loginName.parentElement.querySelector('.stop').style.display = 'inline-block'
          }
          if (!loginPass.value) {
            loginPass.style.border = `1px solid #b63535`
            loginPass.parentElement.querySelector('.stop').style.display = 'inline-block'
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
      maxHeightForUl()
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






function obs(el) {
  observer.disconnect()
  observer.observe(el, {
    attributes: true,
    subtree: true,
    attributeFilter: ['class']
  })
}

obs(app)