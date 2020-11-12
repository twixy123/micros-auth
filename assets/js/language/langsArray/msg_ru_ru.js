const msg = {
    lang: 'ru',
    authorization_in_the_electronic_signature_system_MICROS24: 'Авторизация в системе эллектронного подписания MICROS24',
    login_to_the_system_Micros24: 'Вход в систему | Micros24',
    electronic_signature_system_MICROS24: 'Система эллектронного подписания MICROS24',
    you_are_using_an_old_browser_version: 'Вы используете старую версию браузера.',
    refreshYourBrowser: 'Обновите ваш браузер.',
    enterInSystem: 'Вход в систему',
    authorization: 'Авторизация',
    registration: 'Регистрация',
    autirizationWithEcp: 'Авторизоваться с помощью электронной цифровой подписи выданной государственным налоговым комитетом',
    autirizationWithLoginAndPassword: 'Авторизоваться с помощью логина и пароля',
    enterWithECPKey: 'Войти при помощи ключа ЭЦП',
    choiseProfile: 'Выбор профиля',
    pleaseChoiseProfileToAuthorized: 'Пожалуйста, выберите профиль под которым хотите авторизоваться в системе',
    choiseECPSignature: 'Выберите электронную цифровую подпись',
    dontHaveProgram: 'У вас не установлена программа E-IMZO',
    download: 'Скачать',
    certificate_validity_period: 'Срок действия сертификата',
    login: 'Логин',
    password: 'Пароль',
    enter: 'Войти',
    forgotPassword: 'Забыли пароль',
    changePassword: 'Сменить пароль',
    enterEmail: 'Введите ваш Email',
    further: 'Далее',
    comeBack: 'Вернуться назад',
    youEmail: 'Ваш Email',
    newPassword: 'Новый пароль',
    checkNewPassword: 'Подтвердите пароль',
    checkMail: 'Проверьте почту',
    letterSendedToEmail: 'Письмо с запросом отправлено вам на почту',
    FIO: 'ФИО',
    tin: 'ИНН',
    phone: 'Телефон',
    organization: 'Организация',
    email: 'E-mail',
    message: 'Сообщение',
    send: 'Отправить',
    or: 'ИЛИ',
    enterWithLoginAndPassword: 'Войти с помощью логина и пароля',
    spCond1: 'Входя в систему вы соглашаетесь с ',
    termOfUseInApp: 'Условиями использования',
    spCond2: ', а так же вы можете свободно выбрать',
    operatorESF: 'Оператора ЭСФ',
    onceInSysten: 'Впервые в системе? &nbsp;',
    alreadyInSysten: 'Уже есть в системе? &nbsp;',
    registrationNow: 'Зарегистрироваться',
    autorizationNow: 'Авторизоваться',
    technical_support: 'Техническая поддержка',
    termsOfUse: 'Условия использования',
    license: `©2013-${new Date().getFullYear()} ЧП "Micros Development". Все права защищены.`,
    enterValidName: 'Введите корректное имя',
    enterValidLogin: 'Введите корректный логин',
    smallPassword: 'Пароль должен быть не меньше 6 символов',
    smallLetter: 'Описание должно состоять не меньше 20 символов',
    incorrectEmail: 'Неккоректно заполнено поле Email',
    notMatchPasswords: 'Пароли не совпадают',
    enterOrganization: 'Введите название компании',
    incorrectPhone: 'Неккоректно заполнено поле Телефон',
    lastTimeOnline: 'Последний раз в сети ',
    chooseUser: 'Выберите пользвателя',
    changeUser: 'Авторизоваться другим пользователем',
    choiseUser: 'Выбран пользователь',
}

if (location.href.includes('registration.')) include('assets/js/reg/chengeLang.js')
else include('assets/js/auth/chengeLang.js')