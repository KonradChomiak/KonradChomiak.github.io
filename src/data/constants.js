// Centralized data for F1 drivers - used across F1Page and DriverPage
// This avoids data duplication and makes maintenance easier

export const TEAMS_DATA = [
    { name: 'Mercedes', points: '521.5' },
    { name: 'Redbull', points: '510.5' },
    { name: 'Ferrari', points: '287.5' },
    { name: 'McLaren', points: '256' },
    { name: 'Alpine', points: '112' },
    { name: 'Toro Rosso', points: '112' },
    { name: 'Aston Martin', points: '68' },
    { name: 'Williams', points: '23' },
    { name: 'Alfa Romeo', points: '11' },
    { name: 'Haas', points: '0' },
]

export const DRIVERS_DATA = [
    {
        id: 'kubica',
        displayName: 'Robert Kubica',
        thumbnail: 'assets/kubica1.jpg',
        image: 'assets/kub1.jpg',
        subtitle: 'Robert Kubica to były kierowca F1 w latach 2006-2011 oraz 2019.',
        bio: `Polski kierowca wyścigowy Mistrz Formuły Renault 3.5 z 2005. W latach 2006–2009 był kierowcą zespołu BMW Sauber, rozpoczynając swoją karierę w Formule 1 od roli kierowcy testowego. W czerwcu 2008, podczas Grand Prix Kanady, odniósł swoje pierwsze zwycięstwo w Formule 1, stając się pierwszym Polakiem w historii, który tego dokonał.`,
        facts: ['Urodzony 7 grudnia 1984 w Krakowie', 'Polak'],
        currentInfo: ['Seria ELMS', 'Zespół WRT'],
        links: {
            wikipedia: 'https://pl.wikipedia.org/wiki/Robert_Kubica',
            instagram: 'https://www.instagram.com/robertkubica_real/',
            facebook: 'https://www.facebook.com/KubicaOfficial',
        },
    },
    {
        id: 'max',
        displayName: 'Max Verstappen',
        thumbnail: 'assets/max.jpg',
        image: 'assets/max.jpg',
        subtitle: 'Max Verstappen to aktualny kierowca Red Bull Racing F1',
        bio: `Max Emilian Verstappen (ur. 30 września 1997 w Hasselt) – holenderski kierowca wyścigowy. Od Grand Prix Hiszpanii 2016 kierowca zespołu Red Bull Racing. W wieku 17 lat i 166 dni został najmłodszym kierowcą, który uczestniczył w wyścigu Formuły 1. Jego debiutanckim wyścigiem było Grand Prix Australii 2015 dla Scuderii Toro Rosso. Jest także najmłodszym kierowcą, który zdobył najszybsze okrążenie, miejsce na podium oraz wygrał wyścig Formuły 1.

Verstappen, tak jak większość kierowców zaczął karierę od kartingu, zdobywając kilka tytułów krajowych, dwa tytuły mistrza Europy i tytuł mistrza świata w 2013 roku.`,
        facts: ['30 września 1997', 'Holender'],
        currentInfo: ['Seria F1', 'Zespół Red Bull'],
        links: {
            wikipedia: 'https://pl.wikipedia.org/wiki/Max_Verstappen',
            instagram: 'https://www.instagram.com/maxverstappen1',
            facebook: 'https://www.facebook.com/MaxVerstappen',
        },
    },
    {
        id: 'ham',
        displayName: 'Lewis Hamilton',
        thumbnail: 'assets/ham.jpg',
        image: 'assets/ham1.jpg',
        subtitle: 'Lewis Hamilton 7-krotny mistrz świata F1',
        bio: `W 2005 roku zwyciężył w serii Formuły 3 Euro Series, jeżdżąc dla zespołu ASM. Rok wcześniej reprezentował barwy Manor Motorsport. W sezonie 2006 startował w Serii GP2 w barwach zespołu ART, zajmując miejsce ubiegłorocznego mistrza serii, Nico Rosberga, który rozpoczął starty w Formule 1. Jego największym rywalem był Nelson Ângelo Piquet, syn trzykrotnego mistrza Formuły 1 – Nelsona Piqueta, który ostatecznie stracił szanse na tytuł po przedostatnim wyścigu sezonu na torze Monza we Włoszech.`,
        facts: [],
        currentInfo: [],
        links: {
            wikipedia: 'https://pl.wikipedia.org/wiki/Lewis_Hamilton',
            instagram: 'https://www.instagram.com/lewishamilton/',
            facebook: 'https://www.facebook.com/lewishamilton',
        },
    },
]

// Color options for header color picker - defined once, not recreated on each render
export const COLOR_OPTIONS = [
    { name: 'green', color: '#2ecc71' },
    { name: 'blue', color: '#3498db' },
    { name: 'black', color: '#2c3e50' },
    { name: 'white', color: '#ecf0f1' },
    { name: 'yellow', color: '#f1c40f' },
    { name: 'suprise', color: '#e056fd' },
]

// Social media links
export const SOCIAL_LINKS = [
    {
        name: 'facebook',
        url: 'https://www.facebook.com/kondi.siema',
        icon: 'assets/facebook.png',
        className: 'buttons__facebook'
    },
    {
        name: 'linkedin',
        url: 'https://pl.linkedin.com/',
        icon: 'assets/linkedin.png',
        className: 'buttons__linkedin'
    },
    {
        id: 'github',
        name: 'github',
        url: 'https://github.com/KonradChomiak',
        icon: 'assets/gitmark64.png',
        className: 'buttons__github'
    },
]

// Diary entries for homepage
export const DIARY_ENTRIES = [
    {
        title: 'Dzień 1.',
        content: 'Rozpoczynam przypomnienie po dłuższej przerwie od kursu, powtarzam na nowo wcześniejsze odcinki Korsarza.'
    },
    {
        title: 'Dzień 2.',
        content: 'Zaczynam co raz wiecej sobie przypominać. Przypomniałem sobie zasady działania css i html. W dalszej kolejności planuje bardziej poznać css.'
    },
    {
        title: 'Dzień 3.',
        content: 'Siadam i powtarzam dalej nie klik'
    },
    {
        title: 'Dzień nie wiem który.',
        content: 'Duzo przypomnialem, ale nic nie umiem nadal. Zrobilem w koncu normalna strone o F1, ktora wyświetla się prawidlowo na telefonach. W dalszej przyszlosci bede kontynuował kurs draża korsarza.'
    },
]

// Helper function to get driver by ID
export const getDriverById = (id) => DRIVERS_DATA.find(driver => driver.id === id)
