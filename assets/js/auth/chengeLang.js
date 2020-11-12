console.log('Hello world')

const idElemsToChangeText = [
    {
        tagId: [youUseOldVersion],
        text: msg.you_are_using_an_old_browser_version
    },
    {
        tagId: [refreshBrowser],
        text: msg.refreshYourBrowser
    },
    {
        tagId: [dontHaveProgram],
        text: msg.dontHaveProgram
    },
    {
        tagId: [downloadEIMZO],
        text: msg.download
    },
    {
        tagId: document.querySelectorAll('.validate_ECP'),
        text: msg.certificate_validity_period + ':'
    },
    {
        tagId: [loginName.previousElementSibling],
        text: msg.login
    },
    {
        tagId: [loginPass.previousElementSibling],
        text: msg.password
    },
    {
        tagId: [logInWithLogin],
        text: msg.enter
    },
    {
        tagId: [forgotPassword],
        text: msg.forgotPassword + '?'
    },
    {
        tagId: [forgotEmailInp.previousElementSibling],
        text: msg.enterEmail
    },
    {
        tagId: [forgotPass, changePassword],
        text: msg.further
    },
    {
        tagId: [backToAuthLogin],
        text: msg.comeBack
    },
    {
        tagId: [trueEmail.previousElementSibling],
        text: msg.youEmail + ':'
    },
    {
        tagId: [newPassword.previousElementSibling],
        text: msg.newPassword + ':'
    },
    {
        tagId: [checkNewPassword.previousElementSibling],
        text: msg.checkNewPassword + ':'
    },
    {
        tagId: [letterSendedToEmail],
        text: msg.letterSendedToEmail
    },
    {
        tagId: [contactsName.previousElementSibling],
        text: msg.FIO + ':'
    },
    {
        tagId: [contactsPhone.previousElementSibling],
        text: msg.phone + ':'
    },
    {
        tagId: [contactsEmail.previousElementSibling],
        text: msg.email + ':'
    },
    {
        tagId: [contactsDescription.previousElementSibling],
        text: msg.message + ':'
    },
    {
        tagId: [sendContacts],
        text: msg.send
    },
    {
        tagId: [or],
        text: msg.or
    },
    {
        tagId: [spCond1],
        text: msg.spCond1
    },
    {
        tagId: [termOfUseInApp],
        text: msg.termOfUseInApp
    },
    {
        tagId: [spCond2],
        text: msg.spCond2
    },
    {
        tagId: [operatorESF],
        text: msg.operatorESF
    },
    {
        tagId: [onceInSysten],
        text: msg.onceInSysten
    },
    {
        tagId: [registration],
        text: msg.registrationNow
    },
    {
        tagId: [toContacts],
        text: msg.technical_support
    },
    {
        tagId: [termsOfUse],
        text: msg.termsOfUse
    },
    {
        tagId: [license],
        text: msg.license
    },
]

idElemsToChangeText.forEach(tag=>{
    addInnerHTML(tag.tagId, tag.text)
})
