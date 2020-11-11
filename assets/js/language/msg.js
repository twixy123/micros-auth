const body = document.body
const head = document.head

function addElem(element, attributes, toTag) {
    const elem = document.createElement(element)

    attributes.forEach(e => {
        elem.setAttribute(e.atr, e.atrValue)
    })

    toTag.insertAdjacentElement('beforeend', elem)
}

function include(src) {
    const script = document.createElement('script')
    script.setAttribute('src', src)
    body.insertAdjacentElement('beforeend', script)
}

const lang = localStorage.getItem('lang')
if (lang) {
    if (lang == 'ru-ru') include('./assets/js/language/langsArray/msg_ru_ru.js')
    if (lang == 'uz-oz') include('./assets/js/language/langsArray/msg_uz_oz.js')
    if (lang == 'uz-uz') include('./assets/js/language/langsArray/msg_uz_uz.js')
} else {
    include('./assets/js/language/langsArray/msg_ru_ru.js')
    localStorage.setItem('lang', 'ru-ru')
}
include('./assets/js/language/chengeLang.js')

