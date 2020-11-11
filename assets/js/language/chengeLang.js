const createEllements = [
    {
        name:'meta',
        attrArray: [
            {
                atr: 'name',
                atrValue: 'description'
            },
            {
                atr: 'content',
                atrValue: msg.authorization_in_the_electronic_signature_system_MICROS24
            }
        ],
        tag: head
    },
    {
        name:'meta',
        attrArray: [
            {
                atr: 'name',
                atrValue: 'content-language'
            },
            {
                atr: 'content',
                atrValue: msg.lang
            }
        ],
        tag: head
    },
    {
        name:'meta',
        attrArray: [
            {
                atr: 'property',
                atrValue: 'og:title'
            },
            {
                atr: 'content',
                atrValue: msg.login_to_the_system_Micros24
            }
        ],
        tag: head
    },
    {
        name:'meta',
        attrArray: [
            {
                atr: 'property',
                atrValue: 'og:type'
            },
            {
                atr: 'content',
                atrValue: msg.electronic_signature_system_MICROS24
            }
        ],
        tag: head
    },
]

createEllements.forEach(newTag=>{
    addElem(newTag.name, newTag.attrArray, newTag.tag)
})