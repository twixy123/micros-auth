//checkInp берется из clickLogic
contactsName.addEventListener('input', ()=>{
    checkInp(contactsName, contactsName.value.length > 2, 'Yaroqli ismni kiriting')
})
contactsCompany.addEventListener('input', ()=>{
    checkInp(contactsCompany, contactsCompany.value, 'Kompaniyangiz nomini kiriting')
})
contactsPhone.addEventListener('input', ()=>{
    let reg = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/
    checkInp(contactsPhone, contactsPhone.value.match(reg), `Maydon noto'g'ri to'ldirilgan`)
})
contactsEmail.addEventListener('input', ()=>{
    let reg = /^.+@.+\..+$/i
    checkInp(contactsEmail, contactsEmail.value.match(reg), `Maydon noto'g'ri to'ldirilgan`)
})
contactsDescription.addEventListener('input', ()=>{
    checkInp(contactsDescription, contactsDescription.value.length > 19, `Ta'rif kamida 20 ta belgidan iborat bo'lishi kerak`)
})
sendContacts.addEventListener('click', e=>{
    e.preventDefault()
    const regPhone = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/,
          regEmail = /^.+@.+\..+$/i
    checkInp(contactsName, contactsName.value.length > 2, `Yaroqli ismni kiriting`)
    checkInp(contactsCompany, contactsCompany.value, `Kompaniyangiz nomini kiriting`)
    checkInp(contactsPhone, contactsPhone.value.match(regPhone), `Maydon noto'g'ri to'ldirilgan`)
    checkInp(contactsEmail, contactsEmail.value.match(regEmail), `Maydon noto'g'ri to'ldirilgan`)
    checkInp(contactsDescription, contactsDescription.value.length > 19, `Ta'rif kamida 20 ta belgidan iborat bo'lishi kerak`)
    if (
        checkInp(contactsName, contactsName.value.length > 2, `Yaroqli ismni kiriting`) &&
        checkInp(contactsCompany, contactsCompany.value, `Kompaniyangiz nomini kiriting`) &&
        checkInp(contactsPhone, contactsPhone.value.match(regPhone), `Maydon noto'g'ri to'ldirilgan`) &&
        checkInp(contactsEmail, contactsEmail.value.match(regEmail), `Maydon noto'g'ri to'ldirilgan`) &&
        checkInp(contactsDescription, contactsDescription.value.length > 19, `Ta'rif kamida 20 ta belgidan iborat bo'lishi kerak`)
    ){location.href = location.href}
})