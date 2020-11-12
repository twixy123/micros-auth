const body = document.body
const head = document.head

function addInnerHTML(idElem, text){
    idElem.forEach(e=>e.innerHTML = text)
}

function include(src) {
    const script = document.createElement('script')
    script.setAttribute('src', src)
    body.insertAdjacentElement('beforeend', script)
}

const lang = localStorage.getItem('lang')
const authType = localStorage.getItem('authType')
if (lang) {
    if (lang == 'ru-ru') {
        toOzb.classList.remove('hidden')
        toUzb.classList.remove('hidden')
        include('./assets/js/language/langsArray/msg_ru_ru.js')
    }
    if (lang == 'uz-oz') {
        toRus.classList.remove('hidden')
        toUzb.classList.remove('hidden')
        include('./assets/js/language/langsArray/msg_uz_oz.js')
    }
    if (lang == 'uz-uz') {
        toRus.classList.remove('hidden')
        toOzb.classList.remove('hidden')
        include('./assets/js/language/langsArray/msg_uz_uz.js')
    }
} else {
    include('./assets/js/language/langsArray/msg_ru_ru.js')
    localStorage.setItem('lang', 'ru-ru')
}


