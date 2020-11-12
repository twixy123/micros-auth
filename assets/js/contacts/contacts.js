//checkInp берется из clickLogic
contactsName.addEventListener('input', ()=>{
    checkInp(contactsName, contactsName.value.length > 2, msg.enterValidName)
})
contactsCompany.addEventListener('input', ()=>{
    checkInp(contactsCompany, contactsCompany.value, msg.enterOrganization)
})
contactsPhone.addEventListener('input', ()=>{
    let reg = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/
    checkInp(contactsPhone, contactsPhone.value.match(reg), msg.incorrectPhone)
})
contactsEmail.addEventListener('input', ()=>{
    let reg = /^.+@.+\..+$/i
    checkInp(contactsEmail, contactsEmail.value.match(reg), msg.incorrectEmail)
})
contactsDescription.addEventListener('input', ()=>{
    checkInp(contactsDescription, contactsDescription.value.length > 19, msg.smallLetter)
})
sendContacts.addEventListener('click', e=>{
    e.preventDefault()
    const regPhone = /^((998|\+998)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/,
          regEmail = /^.+@.+\..+$/i
    checkInp(contactsName, contactsName.value.length > 2, msg.enterValidName)
    checkInp(contactsCompany, contactsCompany.value, msg.enterOrganization)
    checkInp(contactsPhone, contactsPhone.value.match(regPhone), msg.incorrectPhone)
    checkInp(contactsEmail, contactsEmail.value.match(regEmail), msg.incorrectEmail)
    checkInp(contactsDescription, contactsDescription.value.length > 19, msg.smallLetter)
    if (
        checkInp(contactsName, contactsName.value.length > 2, msg.enterValidName) &&
        checkInp(contactsCompany, contactsCompany.value, msg.enterOrganization) &&
        checkInp(contactsPhone, contactsPhone.value.match(regPhone), msg.incorrectPhone) &&
        checkInp(contactsEmail, contactsEmail.value.match(regEmail), msg.incorrectEmail) &&
        checkInp(contactsDescription, contactsDescription.value.length > 19, msg.smallLetter)
    ){location.href = location.href}
})