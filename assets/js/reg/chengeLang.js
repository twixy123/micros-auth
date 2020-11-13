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
        tagId: [title],
        text: msg.registration
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
        tagId: [regNextBtn],
        text: msg.further
    },
    {
        tagId: [regLoginEmail.previousElementSibling,contactsEmail.previousElementSibling],
        text: msg.email
    },
    {
        tagId: [regLoginPhone.previousElementSibling,contactsPhone.previousElementSibling],
        text: msg.phone
    },
    {
        tagId: [regLoginCompany.previousElementSibling, contactsCompany.previousElementSibling],
        text: msg.organization
    },
    {
        tagId: [regLoginName.previousElementSibling,contactsName.previousElementSibling],
        text: msg.FIO
    },
    {
        tagId: [regLoginTin.previousElementSibling],
        text: msg.tin
    },
    {
        tagId: [regLogin.previousElementSibling],
        text: msg.login
    },
    {
        tagId: [regPass.previousElementSibling],
        text: msg.password
    },
    {
        tagId: [regCheckPass.previousElementSibling],
        text: msg.checkNewPassword
    },
    {
        tagId: [contactsDescription.previousElementSibling],
        text: msg.message
    },
    {
        tagId: [logInWithLogin],
        text: msg.registrationNow
    },
    {
        tagId: [sendContacts],
        text: msg.send
    },
    {
        tagId: [regPrevBtn, backToRegWithEcp],
        text: msg.comeBack
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
        tagId: [alreadyInSysten],
        text: msg.alreadyInSysten
    },
    {
        tagId: [registration],
        text: msg.autorizationNow
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
