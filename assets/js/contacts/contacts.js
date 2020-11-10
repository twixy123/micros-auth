//checkInp берется из clickLogic
contactsName.addEventListener('input', ()=>{
    checkInp(contactsName, contactsName.value.length > 2, 'Введите корректное имя')
})
contactsCompany.addEventListener('input', ()=>{
    checkInp(contactsCompany, contactsCompany.value, 'Введите название компании')
})
contactsPhone.addEventListener('input', ()=>{
    let reg = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/
    checkInp(contactsPhone, contactsPhone.value.match(reg), 'Неккоректно заполнено поле')
})
contactsEmail.addEventListener('input', ()=>{
    let reg = /^.+@.+\..+$/i
    checkInp(contactsEmail, contactsEmail.value.match(reg), 'Неккоректно заполнено поле')
})
contactsDescription.addEventListener('input', ()=>{
    checkInp(contactsDescription, contactsDescription.value.length > 19, 'Описание должно состоять не меньше 20 символов')
})
sendContacts.addEventListener('click', e=>{
    e.preventDefault()
    const regPhone = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/,
          regEmail = /^.+@.+\..+$/i
    checkInp(contactsName, contactsName.value.length > 2, 'Введите корректное имя')
    checkInp(contactsCompany, contactsCompany.value, 'Введите название компании')
    checkInp(contactsPhone, contactsPhone.value.match(regPhone), 'Неккоректно заполнено поле')
    checkInp(contactsEmail, contactsEmail.value.match(regEmail), 'Неккоректно заполнено поле')
    checkInp(contactsDescription, contactsDescription.value.length > 19, 'Описание должно состоять не меньше 20 символов')
    if (
        checkInp(contactsName, contactsName.value.length > 2, 'Введите корректное имя') &&
        checkInp(contactsCompany, contactsCompany.value, 'Введите название компании') &&
        checkInp(contactsPhone, contactsPhone.value.match(regPhone), 'Неккоректно заполнено поле') &&
        checkInp(contactsEmail, contactsEmail.value.match(regEmail), 'Неккоректно заполнено поле') &&
        checkInp(contactsDescription, contactsDescription.value.length > 19, 'Описание должно состоять не меньше 20 символов')
    ){location.href = location.href}
})