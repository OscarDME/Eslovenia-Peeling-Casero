// src/lib/copy.js
// Celotna besedilna vsebina pristajalne strani je tukaj. Komponente jo samo berejo.
// Jezik: Slovenščina (sl-SI) - Transkreacija v stilu direktnega marketinga.

export const copy = {
  // Dodana besedila (oglasi in dodatne ponudbe/upselli)
  campaign: {
    adText: {
      headline: "Odkrijte skrivnost 🔓",
      body: "💫 Domači piling s profesionalnimi rezultati!\nPoznate tisti sijaj in žametno mehko kožo, ki je videti kot po obisku estetske klinike? 😍 Dosežete ga lahko kar doma, za nanos pa boste odšteli le nekaj centov!\nTa domači piling:\n✨ Zmanjša pore\n✨ Nadzoruje masten lesk\n✨ Posvetli pigmentne madeže\n✨ Spodbuja nastajanje kolagena\n✨ Naredi kožo sijočo, napeto in pomlajeno\n👉 Kliknite na »Več o tem« spodaj in odkrijte, kako do brezhibne kože, ne da bi za to zapravili celo premoženje."
    },
    upsells: [
      {
        title: "👁️ Radirka za temne kolobarje: Skrivni trik za podočnjake in gubice",
        description: "Odlična izbira! Piling za obnovo obraza že imate, toda... koža okoli oči je preprosto pretanja in preobčutljiva zanj. Popolna koža vam ne bo kaj dosti pomagala, če vam temni kolobarji dodajo 10 let. Dodajte ta skrivni vodnik s 15 mikro-recepti z učinkom liftinga, ki v samo 5 minutah zmanjšajo podočnjake, izbrišejo temno barvo in zgladijo gubice okoli oči. Pomladite svoj pogled v trenutku, povsem brez injekcij!"
      },
      {
        title: "💆‍♀️ Učinek »Liftinga«: 5-minutna učvrstitvena samomasaža",
        description: "Vaša koža bo imela tisti neverjeten sijaj kot po obisku klinike, ampak... piling izboljša zgolj teksturo, ne učvrsti pa ohlapnih mišic in ne odpravi podbradka. Ne dovolite, da vam gravitacija uniči videz. Dodajte ta vizualni vodnik s skrivnimi azijskimi tehnikami limfne drenaže in masaže obraza, ki učvrstijo muskulaturo in izoblikujejo čeljustno linijo. Dosezite vizualni učinek liftinga obraza, ne da bi sploh stopili v operacijsko dvorano!"
      },
      {
        title: "💧 Naravni »Botoks«: Serum za polnjenje globokih gub",
        description: "Formulo za oženje por in brisanje površinskih madežev že imate, ampak... kaj pa bomo storili s tistimi globokimi mimičnimi gubami na čelu in okoli ust? Piling obnavlja, a ne polni. Dodajte ta skrivni recept za ultra koncentriran domač serum, ki posnema učinek polnila s hialuronsko kislino. Zapolnite gube od znotraj navzven in zaklenite vlago v svojo novo kožo!"
      },
      {
        title: "✋ Časovni stroj: Skrivni protokol za vrat in roke",
        description: "Piling bo preobrazil vaš obraz, toda... 95 % žensk naredi eno usodno napako: pozabijo na vrat in roke – dve coni, ki v sekundi izdata vašo pravo starost. Ne dovolite si, da bi imeli obraz 30-letnice in roke 50-letnice. Dodajte to posebej razvito formulo, ki zgosti, učvrsti in odstrani pigmentacijo s tanke kože dekolteja in zgornjega dela rok. Pomladite svoj celostni videz!"
      }
    ]
  },

  hero: {
    banner: "EKSKLUZIVNO ZA ŽENSKE, KI ŽELIJO OBNOVITI KOLAGEN V SVOJI KOŽI",
    timerLabels: { days: "Dni", hours: "Ur", minutes: "Minut", seconds: "Sekund" },
    timerNote: "Ponudba poteče čez",
    eyebrow: "DOMAČI ANTI-AGE PILING",
    headline: {
      line1: "Domači piling s",
      highlight: "profesionalnimi rezultati",
      line2: "kar iz udobja vašega doma.",
    },
    subheadline:
      "Prihranite čas in denar s preverjenim in popolnoma varnim receptom. Obnovljena, čvrsta in sijoča koža v do 28 dneh — že po prvem nanosu.",
    bullets: [
      "Zahteva manj kot 20 minut za enostaven nanos",
      "Vsebuje cenovno dostopne in popolnoma varne sestavine",
      "Zagotavlja vidne rezultate že v prvem tednu",
    ],
    cta: "DA, ŽELIM OBNOVITI SVOJ KOLAGEN",
    secondaryNote: "14-dnevna brezpogojna garancija",
    imageAlt: "Prikaz tečaja Domači anti-age piling",
  },

  story: {
    eyebrow: "KAJ SKRIVAJO PRED VAMI",
    headline: "Dermatologi nočejo, da bi izvedeli za to skrivnost.",
    paragraphs: [
      "Aktivna sestavina, za katero vam estetske klinike računajo na stotine evrov, je ista, ki si jo lahko doma pripravite v nekaj minutah, in to dobesedno za drobiž.",
      "Spada v družino salicilne kisline — dokazano učinkovita za obnovo celic, spodbujanje kolagena in brisanje gub, pigmentnih madežev ter ohlapnosti kože.",
      "Zato ta formula ne kroži po YouTubu ali družbenih omrežjih. Industrija raje vidi, da še naprej vsak mesec plačujete za drage posvete."
    ],
    highlights: [
      { value: "Manj kot 1 €", label: "za en domač tretma" },
      { value: "28 dni", label: "do popolne preobrazbe" },
      { value: "1. tretma", label: "da začutite bolj gladko kožo" },
    ],
    cta: "SVOJ PILING ŽELIM ZDAJ",
    industryImageAlt: "Skrivnost kozmetične industrije je razkrita",
    scienceImageAlt: "Znanstveno dokazano delovanje pilinga s salicilno kislino",
  },

  benefits: {
    eyebrow: "KAJ BO OBČUTILA VAŠA KOŽA",
    headline: "Rezultati, ki jih takoj opazite v ogledalu.",
    subheadline:
      "Enostavna rutina, ustvarjena za ženske, ki želijo zdrav in lep videz, ne da bi bile odvisne od dragih postopkov.",
    items: [
      {
        title: "Zgladi drobne in globoke gube",
        desc: "Spodbuja naravno proizvodnjo kolagena, da zapolni nepravilnosti in gubice.",
      },
      {
        title: "Učvrsti kožo in ji povrne sijaj",
        desc: "Pomladi celoten videz in poskrbi, da bo vaša koža žametno mehka ter sijoča.",
      },
      {
        title: "Posvetli pigmentne madeže",
        desc: "Pospeši obnovo celic ter hitro in učinkovito izenači ten vašega obraza.",
      },
      {
        title: "Zmanjša vidno razširjene pore",
        desc: "Poskrbi, da bo koža na dotik popolnoma gladka, s čisto in prefinjeno teksturo.",
      },
    ],
  },

  features: {
    eyebrow: "KAJ SE BOSTE NAUČILI",
    headline: "6 modulov, ki bodo preobrazili vašo kožo v 28 dneh.",
    subheadline: "Konkretne in praktične informacije, brez odvečnega nakladanja. Pogledate, uporabite in vidite rezultat.",
    items: [
      {
        n: "01",
        title: "Skrivnost ljudi, ki se ne starajo",
        desc: "Miselnost, navade in rutina žensk, ki se starajo lepo in z eleganco.",
      },
      {
        n: "02",
        title: "Profesionalni piling za nekaj centov",
        desc: "Skrivna formula s 3 dostopnimi sestavinami: aspirin, kis in naravno olje.",
      },
      {
        n: "03",
        title: "Anti-age napitek za udarno dozo kolagena",
        desc: "Detoks recept, ki spodbudi proizvodnjo kolagena od znotraj navzven.",
      },
      {
        n: "04",
        title: "Protokol »Zmajeva kri«",
        desc: "Kako uporabiti to močno smolo za hitro okrevanje po pilingu.",
      },
      {
        n: "05",
        title: "Profesionalne tehnike nanosa",
        desc: "Korak za korakom: kako pripraviti in nanesti piling s sterilno gazo.",
      },
      {
        n: "06",
        title: "Vidni rezultati in varnost",
        desc: "Urnik nanosov: bolj gladka koža v 7 dneh, popolna preobrazba v 28 dneh.",
      },
    ],
  },

  targetAudience: {
    eyebrow: "TA TEČAJ JE ZA VAS, ČE...",
    headline: "Se prepoznate v kateri od teh situacij?",
    items: [
      {
        title: "Vaša koža je uvela, groba in brez sijaja",
        desc: "Tudi ob uporabi dragih krem je vaš obraz še vedno videti utrujen in brez življenja.",
        imageAlt: "Ženska z uvelo in utrujeno kožo",
      },
      {
        title: "Vaše gube postajajo vse globlje",
        desc: "Mimične linije se začnejo poglabljati in zaradi tega se počutite nelagodno.",
        imageAlt: "Koža z globokimi gubami",
      },
      {
        title: "Po 35. letu se je kontura obraza povesila",
        desc: "Čvrstost je izginila in gravitacija je hitro začela terjati svoj davek.",
        imageAlt: "Ohlapna koža na obrazu",
      },
      {
        title: "Draga kozmetika preprosto ne deluje",
        desc: "Za izdelke, ki obljubljajo čudeže, a ne naredijo ničesar, ste zapravili že goro denarja.",
        imageAlt: "Dragi, a neučinkoviti kozmetični izdelki",
      },
    ],
  },

  howItWorks: {
    eyebrow: "KORAK ZA KORAKOM",
    headline: "Enostaven in varen nanos doma.",
    subheadline:
      "Potrebujete samo 20 minut in tri sestavine, ki jih verjetno že imate v kuhinjski omarici.",
    steps: [
      {
        n: "01",
        title: "Pripravite formulo",
        desc: "Zmešajte sestavine v natančnih razmerjih, prikazanih v videu. Vse je domače in dostopno.",
      },
      {
        n: "02",
        title: "Nanesite s sterilno gazo",
        desc: "Uporabite nežne gibe po obrazu in sledite profesionalni tehniki. Brez bolečin in brez pekočega občutka.",
      },
      {
        n: "03",
        title: "Uživajte v rezultatih",
        desc: "Bolj gladka koža v samo 7 dneh. Po 28 dneh pa – popolna preobrazba: svežina, čvrstost in sijaj.",
      },
    ],
    leftImageAlt: "Ženska nanaša domači piling z gazo",
    rightImageAlt: "Rezultat pred in po domačem pilingu",
  },

  carouselSection: {
    eyebrow: "RESNIČNI REZULTATI",
    headline: "Resnične ženske. Resnične preobrazbe.",
    subheadline: "Poglejte fotografije prej in potem žensk, ki so uporabile protokol doma.",
    cta: "ŽELIM TE REZULTATE",
  },

  bonuses: {
    badge: "VSE VKLJUČENO",
    headline: "Kaj dobite, če naročite danes",
    subheadline: "Doživljenjski dostop do celotnega tečaja + ekskluzivni bonusi.",
    items: [
      {
        title: "Dostop do platforme ES Video",
        desc: "Največja platforma za zdravje in estetiko – vključeno v ceno.",
      },
      {
        title: "Video s skrivnim receptom za piling",
        desc: "Celotna formula z natančnimi razmerji in praktično demonstracijo.",
      },
      {
        title: "Anti-age napitek za kolagen",
        desc: "Recept za detoks napitek, ki okrepi učinek od znotraj navzven.",
      },
      {
        title: "Protokol »Zmajeva kri«",
        desc: "Video korak za korakom za obnovo po pilingu s pomočjo te močne smole.",
      },
      {
        title: "Vodnik korak za korakom (PDF)",
        desc: "Priročno PDF gradivo za tiskanje, da bo vsak nanos popolnoma varen in preprost.",
      },
    ],
  },

  testimonials: {
    eyebrow: "MNENJA",
    headline: "Ni vam treba verjeti meni. Verjemite tem ženskam.",
    items: [
      {
        name: "Marija",
        role: "Ljubljana",
        quote:
          "Bilo me je strah, da bi si obraz tretirala sama doma. Ampak sledila sem korakom in razlika je bila vidna že v prvem tednu. Danes sem, ko se pogledam v ogledalo, povsem nova oseba.",
      },
      {
        name: "Nina",
        role: "Maribor",
        quote:
          "Metala sem gore denarja v klinike in si tega seveda nisem mogla ves čas privoščiti. Doma pa to počnem v miru, brez bolečin, cena pa je v primerjavi z rezultati naravnost smešna.",
      },
      {
        name: "Tjaša",
        role: "Koper",
        quote:
          "Prijateljice me ves čas sprašujejo, kaj sem si dala narediti. Madeži so zbledeli, moja koža pa je postala gladka kot svila. Toplo priporočam vsem!",
      },
    ],
    socialBadge: "RESNIČNI ODZIVI S SPLETA",
    socialHeadline: "Pravi komentarji naših strank",
    socialAlt: "Mnenja udeleženk tečaja na Instagramu",
  },

  finalCta: {
    badge: "PONUDBA ZA OMEJEN ČAS",
    headline: "Začnite še danes. 14-dnevna garancija.",
    guaranteeText:
      "Če se v 14 dneh ne zaljubite v rezultate, vam vrnemo 100 % kupnine. Brez odvečnih vprašanj, brez birokracije. Celotno tveganje prevzamem jaz.",
    bundleHeadline: "Kaj prejmete, ko kliknete zdaj",
    bundleList: [
      "Celoten tečaj Domači anti-age piling",
      "Anti-age napitek za udarno dozo kolagena",
      "Protokol za okrevanje »Zmajeva kri«",
      "Vodnik korak za korakom v PDF formatu",
      "Doživljenjski dostop do platforme ES Video",
    ],
    regularPriceLabel: "Namesto",
    regularPrice: "19,90 €",
    offerLabel: "Samo",
    offerPrice: "9,90 €",
    installments: "Enkratno plačilo",
    economy: "Prihranite 50%",
    urgencyText: "Ponudba velja samo še danes",
    button: "ŽELIM OBNOVITI SVOJ KOLAGEN ZDAJ",
    secureNote: "100 % varno plačilo · Obdeluje OrioPay",
    imageAlt: "Prikaz tečaja Domači anti-age piling",
    guaranteeImageAlt: "Pečat za 14-dnevno garancijo",
  },

  about: {
    eyebrow: "KDO STOJI ZA TEM",
    title: "Estetska strokovnjakinja slavnih",
    name: "Maja Novak",
    paragraphs: [
      "Maja Novak je priznana strokovnjakinja na področju estetike obraza in nege kože. Razvila je naravne protokole za odpravljanje madežev, melazme, aken in izpadanja las, ki so že tisočem žensk pomagali povrniti prepotrebno samozavest.",
      "Je ustanoviteljica lastne klinike in blagovne znamke dermokozmetike. Vodi enega največjih kanalov za zdravje in lepoto na YouTubu v Sloveniji, kjer ji sledi na tisoče žensk.",
      "Njena filozofija je preprosta: resnični rezultati, z veliko mero skrbi in znanstvenim pristopom — ne da bi bili odvisni od nesramno dragih posegov ali uvoženih izdelkov.",
    ],
    stats: [
      { value: "100K+", label: "Naročnikov na YouTubu" },
      { value: "+1.000", label: "Zadovoljnih strank" },
      { value: "Slovenija", label: "Standard v negi kože" },
    ],
    photoAlt: "Maja Novak, vodilna estetska strokovnjakinja v Sloveniji",
  },

  faq: {
    eyebrow: "POGOSTA VPRAŠANJA",
    headline: "Vse, kar morate vedeti pred naročilom.",
    items: [
      {
        q: "Kaj točno kupujem?",
        a: "Kupujete digitalni mini tečaj »Domači anti-age piling« z dostopom do platforme ES Video. Vsebina vas nauči natančne formule, pravilnega nanosa, recepta za anti-age napitek in protokola za varno uporabo.",
      },
      {
        q: "Kaj je vključeno v ceno?",
        a: "Video s skrivno formulo, podroben PDF vodnik in dostop do platforme ES Video z dodatnimi tečaji in gradivi.",
      },
      {
        q: "Kako bom prejela vsebino?",
        a: "Takoj po uspešnem plačilu boste prejeli e-pošto s povezavo do platforme, kjer se nahajajo video in PDF vodnik. Ne pozabite preveriti tudi mape z vsiljeno pošto (Spam). Dostava običajno traja le nekaj minut.",
      },
      {
        q: "Koliko časa po nakupu dobim dostop?",
        a: "Dostava je samodejna in takojšnja po odobritvi plačila — najpogosteje že v manj kot minuti.",
      },
      {
        q: "Kdo lahko uporablja ta domači piling?",
        a: "Primeren je za ženske in moške nad 35 let, ki želijo spodbuditi nastajanje kolagena, zmanjšati gube, madeže in pomanjkanje sijaja. Ne priporoča se osebam z alergijo na aspirin, z izjemno občutljivo kožo ali odprtimi ranami. Alergijski test je pred prvim nanosom obvezen.",
      },
      {
        q: "Ali zares deluje?",
        a: "Da. Aktivna sestavina (acetilsalicilna kislina) spada v isto družino kislin, ki jih v klinikah uporabljajo za celično obnovo: odstranjuje plast odmrlih celic in spodbuja kolagen. Rezultat je primerljiv s površinskim kemičnim pilingom, a po minimalni ceni.",
      },
      {
        q: "Kako so predstavljene lekcije?",
        a: "Preko video lekcij, kombiniranih z informativnimi besedili, v izjemno lahko razumljivem in zelo direktnem formatu.",
      },
      {
        q: "Ali obstaja garancija na zadovoljstvo?",
        a: "Da. Na voljo imate 14 dni, da metodo preizkusite. Če z rezultati ne boste zadovoljni, preprosto kontaktirajte našo ekipo za podporo in vrnili vam bomo 100 % kupnine, povsem brez vprašanj.",
      },
    ],
  },

  closing: {
    eyebrow: "ZA OMEJEN ČAS",
    headline: "Vaša koža je lahko po 28 dneh videti popolnoma drugače.",
    body: "Izbira je lahka: lahko še naprej mečete denar stran za kreme, ki ne delujejo, ali pa enkratno investirate v naravno, praktično metodo z brezpogojno garancijo.",
    cta: "ŽELIM ZAČETI ZDAJ",
    timerNote: "Ponudba poteče čez",
    timerLabels: { days: "Dni", hours: "Ur", minutes: "Minut", seconds: "Sekund" },
  },

  footer: {
    brand: "Maja Novak",
    tagline: "Lepota, ustvarjena z znanostjo in skrbnostjo.",
    rights: "Vse pravice pridržane.",
    legalLinks: [
      { label: "Politika zasebnosti", href: "#" },
      { label: "Pogoji uporabe", href: "#" },
    ],
    disclaimer:
      "To spletno mesto ni povezano s Facebookom ali podjetjem Meta. Rezultati se lahko individualno razlikujejo glede na posamezen organizem.",
  },

  pixel: {
    id: "2099946003917342",
  },

  a11y: {
    skipToContent: "Preskoči na vsebino",
    faqExpand: "Razširi odgovor",
    faqCollapse: "Skrij odgovor",
    carouselPrev: "Prejšnja fotografija",
    carouselNext: "Naslednja fotografija",
  },

  metadata: {
    title: "Domači anti-age piling | Maja Novak",
    description:
      "Naučite se, kako narediti domači piling s profesionalnimi rezultati. Obnovljena, čvrsta in sijoča koža v 28 dneh. 14-dnevna garancija.",
  },
};