const msg = {
    lang:'oz',
    authorization_in_the_electronic_signature_system_MICROS24: 'MICROS24 elektron imzo tizimidagi avtorizatsiya',
    login_to_the_system_Micros24: 'Tizimga kirish | Micros24',
    electronic_signature_system_MICROS24: 'Elektron imzo tizimi MICROS24',
    you_are_using_an_old_browser_version: 'Siz eski brauzer versiyasidan foydalanmoqdasiz.',
    refreshYourBrowser: 'Iltimos, brauzeringizni yangilang.',
    enterInSystem: 'Tizimga kirish',
    authorization: 'Ruxsat',
    registration: 'Belgilanish',
    autirizationWithEcp: 'Davlat soliq qo\'mitasi tomonidan berilgan elektron raqamli imzo bilan tizimga kiring',
    autirizationWithLoginAndPassword: 'Foydalanuvchi nomi va parolingiz bilan kiring',
    enterWithECPKey: 'ECP kaliti bilan tizimga kiring',
    choiseProfile: 'Profilni tanlash',
    pleaseChoiseProfileToAuthorized: 'Iltimos, tizimga kirmoqchi bo\'lgan profilni tanlang',
    choiseECPSignature: 'Elektron raqamli imzoni tanlang',
    dontHaveProgram: 'Sizda E-IMZO o\'rnatilgan emas',
    download: 'Yuklab olish',
    certificate_validity_period: 'Sertifikatning amal qilish muddati',
    login: 'Login',
    password: 'Parol',
    enter: 'Kirish',
    forgotPassword: 'Parolni unutdingizmi?',
    changePassword: 'Kalit so\'zni o\'zgartirish',
    enterEmail: 'Email kiriting',
    further: 'Keyinchalik',
    comeBack: 'Ortga qaytmoq',
    youEmail: 'Sizning Email',
    newPassword: 'Yangi parol',
    checkNewPassword: 'Parolni tasdiqlang',
    checkMail: 'Elektron pochtangizni tekshiring',
    letterSendedToEmail: 'Sizning pochtangizga so\'rov bilan xat yuborildi',
    FIO: 'FIO',
    tin: 'INN',
    phone: 'Telefon',
    organization: 'Tashkilot',
    email: 'E-mail',
    message: 'Xabar',
    send: 'Xabar yuboring',
    or: 'YOKI',
    enterWithLoginAndPassword: 'Foydalanuvchi nomi va parol bilan kiring',
    spCond1: 'Kirish orqali siz rozilik bildirasiz',
    termOfUseInApp: 'Foydalanish shartlari ',
    spCond2: ', shuningdek siz erkin tanlashingiz mumkin',
    operatorESF: 'ESP operatori',
    onceInSysten: 'Tizim uchun yangi? &nbsp;',
    alreadyInSysten: 'Tizimda allaqachon mavjudmi? &nbsp;',
    registrationNow: 'Ro\'yxatdan o\'ting',
    autorizationNow: 'Kirish',
    technical_support: 'Texnik yordam',
    termsOfUse: 'Foydalanish shartlari',
    license: `©2013-${new Date().getFullYear()} ChP "Micros Development". Barcha huquqlar himoyalangan.`,
    enterValidName: 'Yaroqli ismni kiriting',
    enterValidLogin: 'Yaroqli foydalanuvchi nomini kiriting',
    smallPassword: 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak',
    smallLetter: 'Ta\'rif kamida 20 ta belgidan iborat bo\'lishi kerak',
    incorrectEmail: 'Email maydoni noto\'g\'ri to\'ldirilgan',
    notMatchPasswords: 'Parollar mos kelmayapti',
    enterOrganization: 'Kompaniyangiz nomini kiriting',
    incorrectPhone: 'Telefon maydonida noto\'g\'ri to\'ldirilgan',
    lastTimeOnline: 'Oxirgi marta onlayn ',
    chooseUser: 'Foydalanuvchini tanlang',
    addUser: 'Foydalanuvchini qo\'shish',
    userDel: 'Foydalanuvchini o\'chirish',
    choiseUser: 'Foydalanuvchi tanlandi',
}

if (location.href.includes('registration.')) include('./assets/js/reg/chengeLang.js')
else include('./assets/js/auth/chengeLang.js')