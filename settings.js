const quizData = [
    {
        question: "1-savol. Boshqaruv nima? ",
        answers: [
            { text: "Mehnat unumdorligini orttirish va mahsulot tannarxini pasaytirish", correct: false },
            { text: "Bu – tanlov, qaror qabul qilish va uning bajarilishini nazorat qilish jarayonidir", correct: true },
            { text: "Bu-mahsulot va xizmatlarning is’temolchilarga qanchalik naf keltirishidir", correct: false },
            { text: "Voqelikni bilishga bag‘ishlangan umumfalsafiy usullarni qullash", correct: false }
        ]
    },
    {
        question: "2-savol. Raxbarning qaror qabul qilish bilan boglik vazifalarni belgilang: ",
        answers: [
            { text: "axborot qabul qilish, qayta ishlash va tarqatish", correct: false },
            { text: "bosh raxbar, lider, bog‘lovchi bo‘g‘in", correct: false },
            { text: "tadbirkor, kamchilikni to‘g‘rilovchi, resurs tarqatuvchi, muloqotlar olib boruvchi", correct: true },
            { text: "bosh raxbar, raxbar, yordamchi, maslaxatchi", correct: false }
        ]
    },
    {
        question: "3-savol. Kommunikatsiyalar: ",
        answers: [
            { text: "axborot almashish jarayonidir", correct: true},
            { text: "ko‘plab elementlarni bog‘laydi", correct: false },
            { text: "rejalashtirishning amalga oshiradi", correct: false },
            { text: "tashkil etadi", correct: false }
        ]
    },
    {
        question: "4-savol. Shaxslarni boshqarish tizimi qanday jarayonlarni o‘z ichiga oladi? ",
        answers: [
            { text: "shaxslarni tanlash, o‘qitish va rivojlantirish", correct: false},
            { text: "shaxslarni tanlash, o‘qitish, baholash va rivojlantirish", correct: false },
            { text: "shaxslarni tanlash, o‘qitish va rivojlantirishni rag‘batlantirish", correct: false },
            { text: "shaxslarni tanlash, o‘qitish va rivojlantirish, baholash, rag‘batlantirish", correct: true }
        ]
    },
    {
        question: "5-savol. Raxbar uzi egallab to‘rgan lavozim majburiyatlarini bajara borib amalga oshirishi lozim bulgan tanlov qanday qaror deyiladi? ",
        answers: [
            { text: "samarali qaror", correct: false},
            { text: "tashkiliy qaror", correct: true },
            { text: "unumli qaror", correct: false },
            { text: "dasturlashtirilgan qaror", correct: false }
        ]
    },
    {
        question: "6-savol. Korxona deb nimaga aytiladi? ",
        answers: [
            { text: "korxonaning o‘z oldiga qo‘ygan maksadiga erishish uchun shaxslar jamoasi", correct: false},
            { text: "korxonaning o‘z oldiga qo‘ygan maksadiga erishish uchun shaxslar jamoasining faoliyati", correct: true },
            { text: "ikki yoki undan ortiq kishining birgalikda ishlashi", correct: false },
            { text: "maksadlari bir-biriga mos tushgan shaxslar jamoasi", correct: false }
        ]
    },
    {
        question: "7-savol. Biznes-reja bu … ",
        answers: [
            { text: "asosan ishlab chiqarish bo‘limining rejasidir", correct: false},
            { text: "asosan marketing bo‘limining rejasidir", correct: false},
            { text: "korxona (firma)ning rivojlanish strategiyasini belgilab beruvchi asosiy jujjatdir", correct: true },
            { text: "asosan moliyaviy rejadir ", correct: false }
        ]
    },
    {
        question: "8-savol. Strategiya bu…",
        answers: [
            { text: "bozor iqtisodiyotiga moslashish siyosati", correct: false},
            { text: "korxona siyosati", correct: false},
            { text: "korxonani rejalashtirish", correct: false },
            { text: "istikbolni tadqiq qilish va rejalashtirish", correct: true }
        ]
    },
    {
        question: "9-savol. Strategik boshqaruv bu … ",
        answers: [
            { text: "strategik maksadni amalga oshirishga yunaltirilgan boshqaruv faoliyatidir", correct: true},
            { text: "korxonani boshqarish faoliyatidir", correct: false},
            { text: "korxona va xodimlarni boshqarish faoliyatidir", correct: false },
            { text: "korxona maksadini belgilash ", correct: false }
        ]
    },
    {
        question: "10-savol. Kadrlarni boshqarish nima?",
        answers: [
            { text: "bu tashkilotning butun tarmog‘ini rejalashtirish, koordinatsiyalash va nazorat qilishdir", correct: true},
            { text: "bu tashkilotni nazorat qilish", correct: false},
            { text: "bu tashkilotni koordinatsiyalash va rejalashtirish", correct: false },
            { text: "xodimlarni nazorat qilish va ishni to‘g‘ri taqsimlash", correct: false }
        ]
    },
    {
        question: "11-savol. Tashkilotlarni aniq konunlarga va davlatning muvofiqlashtirish me’yorlariga amal qilishi qanday mas’uliyat deyiladi?",
        answers: [
            { text: "Jismoniy", correct: false},
            { text: "Ijtimoiy", correct: false},
            { text: "Iqtisodiy", correct: false },
            { text: "Yuridik", correct: true }
        ]
    },
    {
        question: "12-savol. Qaror nima?",
        answers: [
            { text: "Variantlar yaratish", correct: false},
            { text: "Muqobilini tanlash", correct: true},
            { text: "Matematik dasturlash", correct: false },
            { text: "Rejani bajarilishini ta’minlash", correct: false }
        ]
    },
    {
        question: "13-savol. Modernizatsiya bu - …",
        answers: [
            { text: "tovar xususiyatlarini uzgartirish", correct: false},
            { text: "takomillashtirish", correct: false},
            { text: "ob’ektni yangilash", correct: false },
            { text: "ob’ektni yaxshilash va takomillashtirish, bozorning yangi talablari va me’yorlariga moslashtirish", correct: true }
        ]
    },
    {
        question: "14-savol. Yangilik asosida boshqaruvni tashkil etishni qanday fan o‘rganadi?",
        answers: [
            { text: "menejment", correct: false},
            { text: "strategik menejment", correct: false},
            { text: "innovatsion menejment", correct: true },
            { text: "operatsion menejment", correct: false }
        ]
    },
    {
        question: "15-savol. Korxona raxbari, kengash raisi, prezident qaysi boshqaruv darajasiga mansublar?",
        answers: [
            { text: "Texnik", correct: false},
            { text: "Boshqaruv", correct: false},
            { text: "Institutsional", correct: true },
            { text: "Iqtisodiy", correct: false }
        ]
    },
    {
        question: "16-savol. Samarali qaror…",
        answers: [
            { text: "Bajariladigan qaror", correct: true},
            { text: "Dasturalashtirilmagan qaror", correct: false},
            { text: "Qisqa va lo'nda qaror", correct: false },
            { text: "Dasturlashtirilgan qaror", correct: false }
        ]
    },
    {
        question: "17-savol. Rag‘batlantirish turlarini belgilang",
        answers: [
            { text: "oddiy va murakkab", correct: false},
            { text: "quyi va yuqori", correct: false},
            { text: "moddiy va nomoddiy", correct: false },
            { text: "moddiy va ma’naviy", correct: true }
        ]
    },
    {
        question: "18-savol. Korxona xodimlari qanday kategoriyalarga bo‘linadi?",
        answers: [
            { text: "boshliklar, xizmatchilar va mutaxassislar", correct: true},
            { text: "ishchi v xizmatchilar", correct: false},
            { text: "ishchi va boshliqlar", correct: false },
            { text: "ishchi, xizmatchi va boshliqlar", correct: false}
        ]
    },
    {
        question: "19-savol. Ishlab chiqarish menejmenti – bu:",
        answers: [
            { text: "boshqaruv xokimiyati va san’atidir", correct: false},
            { text: "resurslarni boshqarish bo‘yicha aloxida moxirlik va ma’muriy ko'nikmadir", correct: false},
            { text: "o'ziga xos yuksak san’at va maxoratni talab qiluvchi tanlovdir;", correct: false },
            { text: "resurslarni boshqarish, moxirlik va boshqaruv san’atidir;", correct: true}
        ]
    },
    {
        question: "20-savol. Quyidagi qayd qilinganlarning qaysi biri boshqaruv qarorlarining unsuri bo‘lib xisoblanadi:",
        answers: [
            { text: "vazifa, javobgarlik, manfaatdorlik", correct: false},
            { text: "vazifa, vosita, javobgarlik va muddat", correct: true},
            { text: "vosita, mas’ulyat, amalga oshirish", correct: false },
            { text: "javobgarlik, vosita, natija", correct: false}
        ]
    },
    {
        question: "21-savol. Kirish yo‘l-yo‘rig‘i kim tomonidan o‘tkaziladi?",
        answers: [
            { text: "Mehnat muhofazasi muhandisi, u yo‘qligida korxona bosh muhandisi (mehnat muhofazasi yuklatilgan shaxs)", correct: true},
            { text: "Sex boshlig‘i", correct: false},
            { text: "O‘rta bo‘g‘in raxbarlari", correct: false },
            { text: "Muhandis-texnik xodimlar tomonidan", correct: false}
        ]
    },
    {
        question: "22-savol. Ish joyidagi yo‘l-yo‘riqlarni sanab o‘ting",
        answers: [
            { text: "Kirish, navbatdan tashqari, joriy", correct: false},
            { text: "Birlamchi va davriy", correct: false},
            { text: "Birlamchi, davriy, navbatdan tashqari, joriy", correct: true },
            { text: "Joriy, birlamchi, davriy", correct: false}
        ]
    },
    {
        question: "23-savol. Mehnat muhofazasi bo‘yicha kirish yo‘l-yo‘riqning maqsadi nima?",
        answers: [
            { text: "Sexdagi mehnat sharoitlari, ichki mehnat tartibi qoidalari va mehnat muhofazasi bo‘yicha umumiy holat bilan tanishtirish", correct: false},
            { text: "Lavozim yo‘riqnomasi asosida korxonadagi bajarishi lozim bo‘lgan ishlar bilan tanishtirish", correct: false},
            { text: "Barcha javoblar to‘g‘ri", correct: false },
            { text: "Korxonadagi mehnat sharoitlari, ichki mehnat tartibi qoidalari va mehnat muhofazasi bo‘yicha umumiy holat bilan tanishtirish", correct: true}
        ]
    },
    {
        question: "24-savol. Xizmat safariga jo‘natilayotgan xodim bilan qaysi yo‘l-yo‘riq o‘tkaziladi?",
        answers: [
            { text: "Davriy yo‘l-yo‘riq", correct: false},
            { text: "Joriy yo‘l-yo‘riq", correct: false},
            { text: "Navbatdan tashqari yo‘l-yo‘riq", correct: true },
            { text: "Birlamchi yo‘l-yo‘riq", correct: false}
        ]
    },
    {
        question: "25-savol. Mehnat muhofazasi holatini uch bosqichli nazoratining 1-bosqichi qaysi muddatda o‘tkaziladi?",
        answers: [
            { text: "har kuni ish kuni (navbatchilik) boshida, zarur bo‘lganda esa (xavfliligi yuqori bo‘lgan ishlarda va boshqalarda) – ish kuni (navbatchilik) davomida", correct: true},
            { text: "10-kunda bir marotaba", correct: false},
            { text: "2-oyda bir marotaba", correct: false },
            { text: "To‘g‘ri javob yo‘q", correct: false}
        ]
    },
    {
        question: "26-savol. Mehnat muhofazasi holatini uch bosqichli nazoratining 2-bosqichi qaysi muddatda o‘tkaziladi?",
        answers: [
            { text: "har kuni ish kuni (navbatchilik) boshida, zarur bo‘lganda esa (xavfliligi yuqori bo‘lgan ishlarda va boshqalarda) – ish kuni (navbatchilik) davomida ", correct: false},
            { text: "2-oyda bir marotaba", correct: false},
            { text: "To‘g‘ri javob yo‘q", correct: false },
            { text: "10-kunda bir marotaba", correct: true}
        ]
    },
    {
        question: "27-savol. Mehnat muhofazasi holatini uch bosqichli nazoratini 3-bosqichi kimlar tomonidan o‘tkaziladi?",
        answers: [
            { text: "Sex boshlig‘i mehnat muhofazasi vakili, smenadagi ishchi", correct: false},
            { text: "Korxona raxbari yoki o‘rinbasarlari, mehnat muhofazasi muhandisi, kasaba uyushma qo‘mitasi raisi", correct: true},
            { text: "Korxona raxbari, sex boshlig‘i, mehnat muhofazasi vakili", correct: false },
            { text: "Mehnat muhofazasi muhandisi, sex boshlig‘i, kasaba uyushma qo‘mitasi raisi", correct: false}
        ]
    },
    {
        question: "28-savol. Xodimning mehnat muhofazasi bo‘yicha bilimini tekshirish turlarini sanab o‘ting?",
        answers: [
            { text: "Joriy, davriy", correct: false},
            { text: "Kirish, davriy, navbatdan tashqari ", correct: false},
            { text: "Birlamchi, davriy, navbatdan tashqari", correct: true },
            { text: "To‘g‘ri javob yo‘q", correct: false}
        ]
    },
    {
        question: "29-savol. Mehnat xavfsizligi talablariga rioya qilmaganligi uchun xodimning 1-sonli ogohlantirish taloni olinganida qanday intizomiy jazo chorasi qo‘llaniladi?",
        answers: [
            { text: "“Xayfsan” e’lon qilinadi", correct: true},
            { text: "o‘rtacha oylik ish haqqidan 30 % miqdorgacha jarima undiriladi", correct: false},
            { text: "Xodim bilan tuzilgan mehnat shartnomasi bekor qilinadi", correct: false },
            { text: "Xamma javoblar to‘g‘ri", correct: false}
        ]
    },
    {
        question: "30-savol. Mehnat xavfsizligi talablariga rioya qilmaganligi uchun xodimning 2-sonli ogohlantirish taloni olinganida qancha muddat davomida o‘qitiladi?",
        answers: [
            { text: "2 kun davomida 2 soatdan o‘qitiladi", correct: false},
            { text: "4 ish kuni davomida o‘qitiladi", correct: false},
            { text: "15 kun davomida o‘qitiladi", correct: false },
            { text: "3 kun davomida 2 soatdan o‘qitiladi", correct: true}
        ]
    },
    {
        question: "31-savol. Qaysi vaqt tungi vaqt hisoblanadi?",
        answers: [
            { text: "Soat 20-00 dan to soat 08-00 gacha", correct: false},
            { text: "Soat 00-00 dan to soat 06-00 gacha ", correct: false},
            { text: "Hamma javob noto‘g‘ri", correct: false },
            { text: "Soat 22-00 dan to soat 6-00 gacha ", correct: true}
        ]
    },
    {
        question: "32-savol. Tibbiy ko‘rikni kim tashkil qiladi?",
        answers: [
            { text: "Xodimlar bo‘limi", correct: false},
            { text: "Tibbiyot muassasasi", correct: false},
            { text: "Ish beruvchi", correct: true },
            { text: "Xodimning o‘zi", correct: false}
        ]
    },
    {
        question: "33-savol. Qanday baxtsiz xodisalarda baxtsiz xodisani maxsus tekshirish komissiyasi tuziladi?",
        answers: [
            { text: "Oqibati yengil baxtsiz xodisalarda", correct: false},
            { text: "Oqibati og‘ir, o‘lim va guruhiy baxtsiz xodisalarda", correct: true},
            { text: "Oqibati o‘lim bilan tugagan baxtsiz xodisalarda", correct: false },
            { text: "Barcha turdagi baxtsiz xodisalarda", correct: false}
        ]
    },
    {
        question: "34-savol. Ishlab chikarishdagi qanday baxtsiz hodisalar korxona komissiyasi tomonidan tekshiriladi?",
        answers: [
            { text: "Oqibati yengil va guruhli baxtsiz hodisa", correct: false},
            { text: "Oqibati yengil baxtsiz hodisa", correct: true},
            { text: "Oqibati o‘lim bilan tugagan baxtsiz hodisa", correct: false },
            { text: "Oqibati og‘ir baxtsiz hodisa", correct: false}
        ]
    },
    {
        question: "35-savol. Kontakt tarmog‘ida qancha kuchlanish mavjud?",
        answers: [
            { text: "1000 V", correct: false},
            { text: "380 V", correct: false},
            { text: "220 V", correct: false },
            { text: "27500 V", correct: true}
        ]
    },
    {
        question: "36-savol. Yuk ko‘tarish kranlarini  qancha vaqtda to‘liq texnik ko‘rikdan o‘tkaziladi?",
        answers: [
            { text: "12 oyda 1 marotaba", correct: false},
            { text: "24 oyda 1 marotaba", correct: false},
            { text: "36 oyda 1 marotaba", correct: true },
            { text: "6 oyda 1 marotaba", correct: false}
        ]
    },
    {
        question: "37-savol. Ishlab chiqarishda baxtsiz hodisalarni tekshirish va hisobga olishda qanday hujjat  tuziladi?",
        answers: [
            { text: "N-1 shaklidagi maxsus dalolatnoma", correct: true},
            { text: "Buyruq", correct: false},
            { text: "Bayonnoma", correct: true },
            { text: "Chora-tadbir", correct: false}
        ]
    },
    {
        question: "38-savol. Yonidagi ishchi bilan baxtsiz xodisa sodir bo‘lganda xodimning vazifalari nimalardan iborat?",
        answers: [
            { text: "Raxbariga xabar beradi", correct: false},
            { text: "Tez yordam chaqiradi va tez yordam kelishini kutadi", correct: false},
            { text: "Darxol birinchi yordam ko‘rsatib, tez yordam chaqiradi va raxbariga xabar beradi", correct: true },
            { text: "Atrofdagilardan yordam so‘raydi", correct: false}
        ]
    },
    {
        question: "39-savol. Xodim uchun ish vaqtining normal muddati haftasiga necha soatdan ortiq bo‘lishi mumkin emas?",
        answers: [
            { text: "O‘ttiz olti soatdan ortiq bo‘lishi mumkin emas", correct: false},
            { text: "Qirq sakkiz soatdan ortiq bo‘lishi mumkin emas", correct: false},
            { text: "Yigirma to‘rt soatdan ortiq bo‘lishi mumkin emas", correct: false},
            { text: "Qirq soatdan ortiq bo‘lishi mumkin emas", correct: true}
        ]
    },
    {
        question: "40-savol.  Birinchi darajali kuyishda qaysi xolatlar ko‘zatiladi?",
        answers: [
            { text: "Teri qizaradi, shish, achishish", correct: true},
            { text: "Teri qizaradi, og‘riq, pufakchalar paydo bo‘ladi", correct: false},
            { text: "Terining butunligi buziladi, teri va teri ostida joylashgan yumshoq to‘qimalar ko‘mirsimon o‘zgaradi", correct: false},
            { text: "Teri butunligi buziladi, teri va teri ostida joylashgan yumshoq to‘qimalar va suyak ko‘mirsimon o‘zgaradi", correct: false}
        ]
    },
    {
        question: "41-savol.  Qaysi ishlar yuqori balandlikdagi ishlar deyiladi",
        answers: [
            { text: "4 metrdan balandda bajariladigan ishlar", correct: false},
            { text: "5 metrdan balandda bajariladigan ishlar", correct: true},
            { text: "2 metrdan balandda bajariladigan ishlar", correct: false},
            { text: "1 metrdan balandda bajariladigan ishlar", correct: false}
        ]
    },
    {
        question: "42-savol.  Mehnat muhofazasi bo‘yicha (yangi tahrir)qonun qachon qabul qilingan?",
        answers: [
            { text: "2006 yil 28 sentabrdagi 57-sonli qonun", correct: false},
            { text: "1993 yil  6 maydagi 839-sonli qonun", correct: false},
            { text: "2008 yil 12 noyabrdagi 245-sonli qonun", correct: false},
            { text: "2016 yil 22 sentabrdagi 410-sonli qonun", correct: true}
        ]
    },
    {
        question: "43-savol.  Korxona ishchilarining majburiyatlari?",
        answers: [
            { text: "Barcha javoblar to‘g‘ri", correct: true},
            { text: "Korxona ichki mehnat tartib qoidalariga rioya qilish", correct: false},
            { text: "Mehnat va ishlab chiqarish intizomiga rioya qilish", correct: false},
            { text: "Belgilangan me’yorlarni bajarish", correct: false}
        ]
    },
    {
        question: "44-savol.  Mehnat muhofazasi bo‘yicha yo‘riqnomangiz nechta bo‘limdan iborat?",
        answers: [
            { text: "3 bo‘limdan", correct: false},
            { text: "6 bo‘limdan", correct: false},
            { text: "5 bo‘limdan", correct: true},
            { text: "4 bo‘limdan", correct: false}
        ]
    },
    {
        question: "45-savol.  Himoya kaskasining vazifalari nimalardan iborat?",
        answers: [
            { text: "Ishchini boshiga begona jismlar tegishi, issiq urishi va elektr tokidan jaroxatlanishda saqlaydi", correct: true},
            { text: "Ishchini boshini quyoshdan yoki yomg‘irdan saqlaydi", correct: false},
            { text: "Ishchini boshini issiq ushlab turadi", correct: false},
            { text: "Ishchini boshiga begona jismlar tegishidan saqlaydi", correct: false}
        ]
    },
    {
        question: "46-savol.  Davriy yo‘l-yo‘riqni o‘tkazish maqsadi:",
        answers: [
            { text: "Belgilangan ish joyida ishlab chiqarish holati va ishni xavfsiz usullari bilan tanishtirish", correct: false},
            { text: "Xodimlarni asosiy va boshqa ko‘pincha bajaradigan ishlarni xavfsiz bajarish bo‘yicha bilimlarini yangilash", correct: true},
            { text: "Xodim tomonidan bilim va amaliy qobilyatini o‘zlashtirish", correct: false},
            { text: "Ish sharoiti, ichki mehnat tartibi qoidalari, mehnat muhofazasi bo‘yicha umumiy holati bilan tanishtirish", correct: false}
        ]
    },
    {
        question: "47-savol.  Ish tugagach, keyingi ish kuni boshlanishidan oldin oradagi kunlik dam olish vaqtining davomiyligi qancha?",
        answers: [
            { text: "10 soatdan kam bo‘lmasligi kerak", correct: false},
            { text: "6 soatdan kam bo‘lmasligi kerak", correct: false},
            { text: "8 soatdan kam bo‘lmasligi kerak", correct: false},
            { text: "12 soatdan kam bo‘lmasligi kerak", correct: true}
        ]
    },
    {
        question: "48-savol.  Tungi ishlarga kimlar jalb qilinmaydi?",
        answers: [
            { text: "barcha javoblar to‘g‘ri", correct: true},
            { text: "Ayollar, 14 yoshga to‘lmagan (16 yoshgacha nogiron) bolasi bo‘lsa", correct: false},
            { text: "I va II gurux nogiron ishchilar", correct: false},
            { text: "Xomilador ayollar", correct: false}
        ]
    },
    {
        question: "49-savol.  “O‘zbekiston temir yo‘llari” AJ korxona va stansiyalarida xodimlarni o‘qitish va bilimlarini sinovdan o‘tkazish to‘g‘risida”gi nizom?",
        answers: [
            { text: "NBT-312", correct: true},
            { text: "NBT-313", correct: false},
            { text: "Korxona standartlari (SSBT)", correct: false},
            { text: "Ogoxlantirish talonlari to‘g‘risidagi nizom", correct: false}
        ]
    },
    {
        question: "50-savol.  Mehnat muhofazasi tushunchasi bu?",
        answers: [
            { text: "mehnat jarayonida jarohat olmasligi uchun himoya vositalaridan foydalanish", correct: false},
            { text: "ish boshlashdan oldin joriy yo‘riqnomadan o‘tish", correct: false},
            { text: "baxtsiz xodisalarni oldini olish uchun tegishli yo‘riqnoma asosida ish bajarish", correct: false},
            { text: "mehnat jarayonida insonning xavfsizligini, hayoti va sog‘lig‘i, ish qobiliyati saqlanishini ta’minlashga doir huquqiy, ijtimoiy-iqtisodiy, tashkiliy, texnikaviy, sanitariya-gigiena, davolash-profilaktika, reabilitasiya tadbirlari hamda vositalari tizimi", correct: true}
        ]
    },
    {
        question: "51-savol.  Qoʻl signali yordamida poyezdni toʻxtatishda, mashinist signalistni signalini koʻrgandan keyin, necha marta signal beradi?",
        answers: [
            { text: "3 ta qisqa", correct: true},
            { text: "2 ta qisqa", correct: false},
            { text: "1 ta uzun", correct: false},
            { text: "4 ta qisqa", correct: false}
        ]
    },
    {
        question: "52-savol.  Qoʻl signali yordamida poyezdni sekinlatishda, mashinist signalistni signalini koʻrgandan keyin,  necha marta signal beradi?",
        answers: [
            { text: "1 ta uzun", correct: false},
            { text: "1 ta qisqa", correct: false},
            { text: "2 ta qisqa", correct: true},
            { text: "2 ta uzun", correct: false}
        ]
    },
    {
        question: "53-savol.  Qoʻl signali yordamida poyezdni orqaga harakatlantirishda, mashinist signalistni signalini koʻrgandan keyin, necha marta signal beradi?",
        answers: [
            { text: "1 ta qisqa", correct: false},
            { text: "2 ta qisqa", correct: false},
            { text: "1 ta uzun", correct: false},
            { text: "2 ta uzun", correct: true}
        ]
    },
    {
        question: "54-savol.  Qoʻl signali yordamida poyezdni oldinga harakatlantirishda, mashinist signalistni signalini koʻrgandan keyin, necha marta signal beradi?",
        answers: [
            { text: "2 ta qisqa", correct: false},
            { text: "1 ta uzun", correct: true},
            { text: "2 ta uzun", correct: false},
            { text: "1 ta qisqa", correct: false}
        ]
    },
    {
        question: "55-savol.  Poyezdni kuzatishda navbatchi xodim temir yoʻlga qaragan holda boshini poyezd harakati tomonga necha daraja burchak ostida burishi lozim?",
        answers: [
            { text: "45", correct: true},
            { text: "40", correct: false},
            { text: "50", correct: false},
            { text: "30", correct: false}
        ]
    },
    {
        question: "56-savol.  Poyezdni kuzatishda chetdagi relsdan kamida necha metr masofada boʻlishi lozim?",
        answers: [
            { text: "3", correct: false},
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "4", correct: false}
        ]
    },
    {
        question: "57-savol.  Poyezdlar tezligi soatiga 140 km dan ortiq boʻlganda poyezdni kuzatishda  chetdagi relsdan kamida necha metr masofada boʻlishi lozim?",
        answers: [
            { text: "6", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
            { text: "3", correct: false}
        ]
    },
    {
        question: "58-savol.  Poyezdlar tezligi soatiga 160 km dan ortiq boʻlgan poyezdni kuzatishda  chetdagi relsdan kamida necha metr masofada boʻlishi lozim?",
        answers: [
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "6", correct: false},
            { text: "5", correct: true}
        ]
    },
    {
        question: "59-savol.  Poyezdlar harakat tezligi 100 km/s boʻlganda stikdagi zazor necha mm dan koʻp boʻlmasligi lozim?",
        answers: [
            { text: "24-26", correct: true},
            { text: "26-30", correct: false},
            { text: "30-35", correct: false},
            { text: "36-40", correct: false}
        ]
    },
    {
        question: "60-savol.  Poyezdlar harakat tezligi 60 km/s boʻlganda stikdagi zazor necha mm dan koʻp boʻlmasligi lozim?",
        answers: [
            { text: "24-26", correct: false},
            { text: "26-30", correct: true},
            { text: "30-35", correct: false},
            { text: "36-40", correct: false}
        ]
    },
    {
        question: "61-savol.  Poyezdlar harakat tezligi 25 km/s boʻlganda stikdagi zazor necha mm dan koʻp boʻlmasligi lozim?",
        answers: [
            { text: "24-26", correct: false},
            { text: "26-30", correct: true},
            { text: "30-35", correct: false},
            { text: "36-40", correct: false}
        ]
    },
    {
        question: "62-savol.  Stikdagi zazor necha mm dan koʻp boʻlganda poyezdlar harakati yopiladi?",
        answers: [
            { text: "40", correct: false},
            { text: "35", correct: true},
            { text: "45", correct: false},
            { text: "30", correct: false}
        ]
    },
    {
        question: "63-savol.  Necha metr dan katta koʻpriklarda himoya panjaralari oʻrnatiladi?",
        answers: [
            { text: "25", correct: true},
            { text: "20", correct: false},
            { text: "15", correct: false},
            { text: "10", correct: false}
        ]
    },
    {
        question: "64-savol.  Yer sathidan necha metr dan baland boʻlgan koʻpriklarga himoya panjaralari oʻrnatiladi?",
        answers: [
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false}
        ]
    },
    {
        question: "65-savol.  Necha metr dan katta koʻpriklarda kontrrels oʻrnatilad?",
        answers: [
            { text: "30", correct: false},
            { text: "40", correct: false},
            { text: "50", correct: true},
            { text: "60", correct: false}
        ]
    },
    {
        question: "66-savol.  Necha metrdan katta koʻpriklar katta koʻpriklar hisoblanadi?",
        answers: [
            { text: "95", correct: false},
            { text: "90", correct: false},
            { text: "100", correct: true},
            { text: "150", correct: false}
        ]
    },
    {
        question: "67-savol.  Ikki rels oraligʻidagi ruxsat etiladigan meyoriy masofa (shablon) necha mm boʻladi?",
        answers: [
            { text: "1524", correct: false},
            { text: "1520", correct: true},
            { text: "1530", correct: false},
            { text: "1536", correct: false}
        ]
    },
    {
        question: "68-savol.  Ikki rels oraligʻidagi ruxsat etiladigan maksimal masofa (shablon) necha mm boʻladi?",
        answers: [
            { text: "1548", correct: true},
            { text: "1515", correct: false},
            { text: "1535", correct: false},
            { text: "1540", correct: false}
        ]
    },
    {
        question: "69-savol.  Ikki rels oraligʻidagi ruxsat etiladigan minimal masofa (shablon) necha mm boʻladi?",
        answers: [
            { text: "1520", correct: false},
            { text: "1515", correct: false},
            { text: "1512", correct: true},
            { text: "1518", correct: false}
        ]
    },
    {
        question: "70-savol.  R65 turli relsni balandligi necha mm?",
        answers: [
            { text: "160", correct: false},
            { text: "175", correct: false},
            { text: "170", correct: false},
            { text: "180", correct: true}
        ]
    },
    {
        question: "71-savol.  Necha metrdan katta koʻpriklar oʻrta koʻpriklar hisoblanadi?",
        answers: [
            { text: "25", correct: true},
            { text: "15", correct: false},
            { text: "10", correct: false},
            { text: "20", correct: false}
        ]
    },
    {
        question: "72-savol.  Temir betonli koʻpriklarda shagʻal qalinligi meyor boʻyicha necha mm boʻladi?",
        answers: [
            { text: "35", correct: false},
            { text: "40", correct: true},
            { text: "30", correct: false},
            { text: "45", correct: false}
        ]
    },
    {
        question: "73-savol.  Temir betonli shpal uzunligi mm:",
        answers: [
            { text: "2650", correct: false},
            { text: "2800", correct: false},
            { text: "2700", correct: true},
            { text: "2900", correct: false}
        ]
    },
    {
        question: "74-savol.  Stikdagi zazor oʻlchami boʻyicha poyezdlarni harakati tezligi  -24-26 mm gacha. ",
        answers: [
            { text: "70", correct: false},
            { text: "90", correct: false},
            { text: "80", correct: false},
            { text: "100", correct: true}
        ]
    },
    {
        question: "75-savol.  Stikdagi zazor oʻlchami boʻyicha poyezdlarni harakati tezligi  -26-30 mm gacha. ",
        answers: [
            { text: "60", correct: true},
            { text: "70", correct: false},
            { text: "80", correct: false},
            { text: "100", correct: false}
        ]
    },
    {
        question: "76-savol.  Stikdagi zazor oʻlchami boʻyicha poyezdlarni harakati tezligi  -30-35 mm gacha. ",
        answers: [
            { text: "30", correct: false},
            { text: "25", correct: true},
            { text: "40", correct: false},
            { text: "35", correct: false}
        ]
    },
    {
        question: "77-savol.  Stikdagi zazor oʻlchami boʻyicha poyezdlarni harakati tezligi  -35 mm dan katta boʻlganda. ",
        answers: [
            { text: "15", correct: false},
            { text: "20", correct: false},
            { text: "25", correct: false},
            { text: "Harakat yopiladi", correct: true}
        ]
    },
    {
        question: "78-savol. Stikda bitta bolt kesilganda (4 teshikli nakladkada) poyezdlar harakat tezligi necha km/s bilan oʻtadi? ",
        answers: [
            { text: "50", correct: false},
            { text: "40", correct: false},
            { text: "25", correct: true},
            { text: "30", correct: false}
        ]
    },
    {
        question: "79-savol. Stikda ikkita bolt kesilganda (6 teshikli nakladkada) poyezdlar harakat tezligi necha km/s bilan oʻtadi? ",
        answers: [
            { text: "25", correct: true},
            { text: "40", correct: false},
            { text: "50", correct: false},
            { text: "30", correct: false}
        ]
    },
    {
        question: "80-savol. Stikdagi bir tomondagi boltni bachasi kesilganda poyezdlar harakat tezligi necha km/s bilan oʻtadi? ",
        answers: [
            { text: "10", correct: false},
            { text: "20", correct: false},
            { text: "Harakat yopiladi", correct: true},
            { text: "30", correct: false}
        ]
    },
    {
        question: "81-savol. Izostikdagi meyoriy zazor necha mm boʻladi? ",
        answers: [
            { text: "10", correct: false},
            { text: "5-10", correct: true},
            { text: "10-15", correct: false},
            { text: "20", correct: false}
        ]
    },
    {
        question: "82-savol. Yoʻl xoʻjalik belgilari yoʻl oʻqidan necha mm boʻlishi lozim?",
        answers: [
            { text: "1900", correct: true},
            { text: "1840", correct: false},
            { text: "3200", correct: false},
            { text: "3100", correct: false}
        ]
    },
    {
        question: "83-savol. Bosh temir yoʻlda shpal epyurasi necha dona boʻladi ?",
        answers: [
            { text: "1440", correct: false},
            { text: "1600", correct: false},
            { text: "1840", correct: true},
            { text: "1500", correct: false}
        ]
    },
    {
        question: "84-savol. “Xavfli joy boshlanishi va oxiri” ish joyidan necha metrga oʻrnatiladi?",
        answers: [
            { text: "45", correct: false},
            { text: "50", correct: true},
            { text: "40", correct: false},
            { text: "30", correct: false}
        ]
    },
    {
        question: "85-savol. “Poyezdlarni toʻxtatish” qizil shit belgisi ish joyidan necha metrga oʻrnatiladi?",
        answers: [
            { text: "50", correct: true},
            { text: "30", correct: false},
            { text: "40", correct: false},
            { text: "60", correct: false}
        ]
    },
    {
        question: "86-savol. Temir yoʻl koʻchma belgilarini dasta qalinlik diametri necha mm boʻladi?",
        answers: [
            { text: "50", correct: false},
            { text: "60", correct: true},
            { text: "40", correct: false},
            { text: "30", correct: false}
        ]
    },
    {
        question: "87-savol. Necha metrdan katta boʻlgan koʻpriklarda poyezdlarni kuzatish uchun maydoncha oʻrnatiladi?",
        answers: [
            { text: "45", correct: false},
            { text: "55", correct: false},
            { text: "40", correct: false},
            { text: "50", correct: true}
        ]
    },
    {
        question: "88-savol. Temir yoʻlda qoʻllaniladigan signallar necha turga boʻlinad?",
        answers: [
            { text: "4", correct: false},
            { text: "3", correct: false},
            { text: "2", correct: true},
            { text: "5", correct: false}
        ]
    },
    {
        question: "89-savol. MM va TX  buyicha nechchi xil yoʻriqnoma mavjud?",
        answers: [
            { text: "6", correct: false},
            { text: "5", correct: true},
            { text: "7", correct: false},
            { text: "8", correct: false}
        ]
    },
    {
        question: "90-savol. 25 m relslar stikdagi zazor yoz faslida izma-iz nechtadan koʻp boʻlganda ruxsat etilmaydi?",
        answers: [
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false}
        ]
    },
    {
        question: "91-savol. 12,5 m relslar stikdagi zazor yoz faslida izma-iz nechtadan koʻp boʻlganda ruxsat etilmaydi?",
        answers: [
            { text: "3", correct: false},
            { text: "5", correct: false},
            { text: "6", correct: false},
            { text: "4", correct: true}
        ]
    },
    {
        question: "92-savol. Temir yoʻlni belgilanmagan qismidan kesib oʻtgan fuqaroga nisbatan Oʻz.Res.MJtK ning qaysi moddasiga asosan chora koʻriladi?",
        answers: [
            { text: "113-modda 1-qism", correct: false},
            { text: "113-modda 2-qism", correct: false},
            { text: "113-modda 4-qism", correct: true},
            { text: "113-modda 3-qism", correct: false}
        ]
    },
    {
        question: "93-savol. Temir yoʻlni belgilanmagan qismida chorva mollari boqqan  fuqaroga nisbatan Oʻz.Res.MJtK ning qaysi moddasiga asosan chora koʻriladi?",
        answers: [
            { text: "113-modda 2-qism", correct: true},
            { text: "113-modda 1-qism", correct: false},
            { text: "113-modda 4-qism", correct: false},
            { text: "113-modda 3-qism", correct: false}
        ]
    },
    {
        question: "94-savol. Temir yoʻlni inshootlariga shikast yetkazgan fuqarolarga nisbatan Oʻz.Res MJtK ning qaysi moddasiga asosan chora koʻriladi?",
        answers: [
            { text: "113-modda 2-qism", correct: false},
            { text: "113-modda 1-qism", correct: true},
            { text: "113-modda 4-qism", correct: false},
            { text: "113-modda 3-qism", correct: false}
        ]
    },
    {
        question: "95-savol. MM va TX  buyicha ogoxlantirish talonlari soni nechta?",
        answers: [
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "2", correct: false},
            { text: "5", correct: false}
        ]
    },
    {
        question: "96-savol. Peregon oʻqchisining yoʻriqnoma turlari nechchi boʻlinadi ?",
        answers: [
            { text: "4", correct: false},
            { text: "5", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false}
        ]
    },
    {
        question: "97-savol. Tungi ish vaqti tushunchasi soat nechchidan nechchigacha xisoblanadi?",
        answers: [
            { text: "18:00 - 10:00", correct: false},
            { text: "20:00 - 08:00", correct: false},
            { text: "18:00 - 09-00", correct: false},
            { text: " 22:00 - 06:00", correct: true}
        ]
    },
    {
        question: "98-savol. Xodim xizmat vaqtida lavozim yoʻriqnomasi talablarini buzgan hollarda unga nisbatan Oʻz.Res. Mexnat Kodeksining qaysi moddasiga asosan intizomiy jazo chorasi qoʻllaniladi ?",
        answers: [
            { text: "181-modda ", correct: false},
            { text: "312-modda", correct: true},
            { text: "113-modda", correct: false},
            { text: "115-modda", correct: false}
        ]
    },
    {
        question: "99-savol. Postda turgan xodim yoʻlovchi poyezd kelish oldidan kalitkasini qancha vaqt oldin berkitish lozim?",
        answers: [
            { text: "15 daqiqa", correct: false},
            { text: "10 daqiqa", correct: true},
            { text: "12 daqiqa", correct: false},
            { text: "20 daqiqa", correct: false}
        ]
    },
    {
        question: "100-savol. Peregon oʻqchisi post butkasidan poyezdlarni kuzatganida temir yoʻl izlaridan qancha masofa uzoqlikda kuzatishi lozim?",
        answers: [
            { text: "5 metr", correct: true},
            { text: "10 metr", correct: false},
            { text: "15 metr", correct: false},
            { text: "20 metr", correct: false}
        ]
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let countcorrect = 0;

const questionContainer = document.getElementById('question-container');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    resetAnswerButtons();

    question.answers.map((answer) => {
        const div = document.createElement('div')
        div.style.display = 'block'
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.style.border = "solid 1px black"
        button.style.margin = '5px'
        div.appendChild(button)
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsContainer.appendChild(div);

    });
}

function resetAnswerButtons() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
    
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct == true) {
        alert("Javobingiz to'g'ri!")
        countcorrect += 1;
    }
    else if(correct == false) {
        for (const ans of quizData[currentQuestionIndex].answers) {
            if(ans.correct == true) {
                alert(`Javobingiz xato!  To'g'ri javob: ${ans.text}. Keyingi savolga o'ting.`)
            }
        }
    }
  

    // Disable answer buttons after selection
    answerButtonsContainer.childNodes.forEach(button => {
        button.disabled = true;
    });

    // Show the "Next" button
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex += 1;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
        console.log(quizData[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        const result = document.getElementById('result')
        // End of the quiz, display final score or completion message
        questionContainer.innerText = "Test yakunlandi!";
        nextButton.innerHTML = '';
        nextButton.className = '';
        result.innerHTML = `Natijani ko'rish`
        resetAnswerButtons();
    }
}

function result() {
    alert(`To'g'ri javoblar soni: ${countcorrect} ta !`)
}

// Start the quiz when the page loads
startQuiz();
