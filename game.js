/* --------------------------------------------------
   1. TRANSLATION DICTIONARY
-------------------------------------------------- */
const i18n = {
    en: {
        tabHome: "🏠 Home",
        tabAbout: "👤 About Me",
        tabSports: "🏆 Recent Sports",
        title: "Introduction to Web Development",
        welcome: "Welcome to our class webpage! In this course, we are learning the fundamentals of building and publishing websites using HTML, CSS, and JavaScript on GitHub Pages.",
        tipTitle: "💡 Tip Generator",
        tipSub: "Click the button below to reveal a web dev tip!",
        tipBtn: "Get a Tip",
        tipDefault: "Click the button above to start!",
        tips: [
            "HTML provides structure, CSS adds styling, and JavaScript adds interactivity!",
            "Use browser Developer Tools (F12) to inspect and debug webpage elements live.",
            "Always include 'alt' text on images to make your website accessible to screen readers.",
            "GitHub Pages automatically builds your live site whenever you commit updates!"
        ],
        gameTitle: "🏀 82-0 Random Legend Basketball Simulator",
        gameSub: "Click <strong>Draft Random Roster</strong> to draw 5 random all-time NBA legends into your starting lineup, then simulate an 82-game season to reach 82-0 perfection!",
        shuffleBtn: "🎲 Draft Random Roster",
        simBtn: "🚀 Simulate 82-Game Season",
        aboutHeading: "👤 About Me",
        aboutSub: "Welcome! Here is a little insight into who I am, what I play, and what I love doing!",
        aboutSportsTitle: "⚾ Sports & Athletics",
        aboutSportsDesc: "I love sports! I especially love playing baseball and staying active on the field.",
        aboutGamesTitle: "🎮 Favorite Video Games",
        aboutTravelTitle: "✈️ Travel & Exploration",
        aboutTravelDesc: "I love traveling, exploring new places, visiting major stadiums, and experiencing different cultures!",
        sportsHeading: "🏆 Recent Sports Games & Live Updates",
        sportsSub: "Check out live scores, standings, and recent game recaps from around the sports world!",
        learn: "Want to learn more? Check out ",
        or: " or explore projects on ",
        darkMode: "🌙 Dark Mode",
        lightMode: "☀️ Light Mode"
    },
    fr: {
        tabHome: "🏠 Accueil",
        tabAbout: "👤 À Propos",
        tabSports: "🏆 Sports Récents",
        title: "Introduction au Développement Web",
        welcome: "Bienvenue sur notre page web de cours ! Dans ce cours, nous apprenons les bases de la création et de la publication de sites web avec HTML, CSS et JavaScript sur GitHub Pages.",
        tipTitle: "💡 Générateur d'Astuces",
        tipSub: "Cliquez sur le bouton ci-dessous pour afficher un conseil !",
        tipBtn: "Obtenir un conseil",
        tipDefault: "Cliquez sur le bouton ci-dessus pour commencer !",
        tips: [
            "L'HTML fournit la structure, le CSS ajoute le style et le JavaScript ajoute l'interactivité !",
            "Utilisez les outils de développement (F12) pour inspecter vos éléments en direct.",
            "Incluez toujours un texte 'alt' sur vos images pour rendre votre site accessible.",
            "GitHub Pages déploie automatiquement votre site en direct à chaque commit !"
        ],
        gameTitle: "🏀 Simulateur 82-0 Légendes Aléatoires",
        gameSub: "Cliquez sur <strong>Tirer une Équipe Aléatoire</strong> pour obtenir 5 légendes NBA au hasard, puis simulez 82 matchs pour viser le 82-0 parfait !",
        shuffleBtn: "🎲 Tirer une Équipe Aléatoire",
        simBtn: "🚀 Simuler la Saison (82 Matchs)",
        aboutHeading: "👤 À Propos de Moi",
        aboutSub: "Bienvenue ! Voici un aperçu de qui je suis, à quoi je joue et ce que j'aime faire !",
        aboutSportsTitle: "⚾ Sports et Athlétisme",
        aboutSportsDesc: "J'adore le sport ! J'aime particulièrement jouer au baseball et rester actif sur le terrain.",
        aboutGamesTitle: "🎮 Jeux Vidéo Préférés",
        aboutTravelTitle: "✈️ Voyages et Exploration",
        aboutTravelDesc: "J'adore voyager, explorer de nouveaux endroits, visiter de grands stades et découvrir de nouvelles cultures !",
        sportsHeading: "🏆 Matchs et Actualités Sportives en Direct",
        sportsSub: "Découvrez les scores en direct et les résumés des matchs des grandes ligues !",
        learn: "Vous voulez en savoir plus ? Consultez ",
        or: " ou explorez des projets sur ",
        darkMode: "🌙 Mode Sombre",
        lightMode: "☀️ Mode Clair"
    },
    es: {
        tabHome: "🏠 Inicio",
        tabAbout: "👤 Sobre Mí",
        tabSports: "🏆 Deportes Recientes",
        title: "Introducción al Desarrollo Web",
        welcome: "¡Bienvenido a la página web de nuestra clase! En este curso, aprendemos los fundamentos del diseño y publicación de sitios web con HTML, CSS y JavaScript en GitHub Pages.",
        tipTitle: "💡 Generador de Consejos",
        tipSub: "¡Haz clic en el botón de abajo para revelar un consejo de desarrollo web!",
        tipBtn: "Obtener Consejo",
        tipDefault: "¡Haz clic arriba para comenzar!",
        tips: [
            "¡HTML proporciona la estructura, CSS añade estilo y JavaScript agrega interactividad!",
            "Usa las herramientas de desarrollo del navegador (F12) para depurar elementos en vivo.",
            "Siempre incluye texto 'alt' en tus imágenes para que tu sitio sea accesible para todos.",
            "¡GitHub Pages publica automáticamente tu sitio web en vivo cada vez que haces un commit!"
        ],
        gameTitle: "🏀 Simulador 82-0 Leyendas Aleatorias",
        gameSub: "¡Haz clic en <strong>Generar Equipo Aleatorio</strong> para obtener 5 leyendas de la NBA al azar, luego simula 82 partidos para lograr el 82-0!",
        shuffleBtn: "🎲 Generar Equipo Aleatorio",
        simBtn: "🚀 Simular Temporada (82 Partidos)",
        aboutHeading: "👤 Sobre Mí",
        aboutSub: "¡Bienvenido! ¡Aquí hay un poco de información sobre quién soy, a qué juego y qué me encanta hacer!",
        aboutSportsTitle: "⚾ Deportes y Atletismo",
        aboutSportsDesc: "¡Me encantan los deportes! Especialmente jugar al béisbol y mantenerme activo en el campo.",
        aboutGamesTitle: "🎮 Videojuegos Favoritos",
        aboutTravelTitle: "✈️ Viajes y Exploración",
        aboutTravelDesc: "¡Me encanta viajar, explorar nuevos lugares, visitar grandes estadios y experimentar diferentes culturas!",
        sportsHeading: "🏆 Noticias y Partidos Deportivos en Vivo",
        sportsSub: "¡Revisa marcadores en vivo y resúmenes de partidos de las principales ligas!",
        learn: "¿Quieres aprender más? Visita ",
        or: " o explora proyectos en ",
        darkMode: "🌙 Modo Oscuro",
        lightMode: "☀️ Modo Claro"
    }
};

let currentLang = 'en';

/* PAGE SWITCHER */
function switchPage(page) {
    document.getElementById('page-home').style.display = page === 'home' ? 'block' : 'none';
    document.getElementById('page-about').style.display = page === 'about' ? 'block' : 'none';
    document.getElementById('page-sports').style.display = page === 'sports' ? 'block' : 'none';
    
    document.getElementById('tab-home').className = page === 'home' ? 'tab-btn active' : 'tab-btn';
    document.getElementById('tab-about').className = page === 'about' ? 'tab-btn active' : 'tab-btn';
    document.getElementById('tab-sports').className = page === 'sports' ? 'tab-btn active' : 'tab-btn';
}

/* LANGUAGE TRANSLATION TOGGLE */
const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', function(e) {
    currentLang = e.target.value;
    applyTranslations();
});

function applyTranslations() {
    const t = i18n[currentLang];
    document.getElementById('tab-home').textContent = t.tabHome;
    document.getElementById('tab-about').textContent = t.tabAbout;
    document.getElementById('tab-sports').textContent = t.tabSports;
    document.getElementById('page-title').textContent = t.title;
    document.getElementById('welcome-text').textContent = t.welcome;
    document.getElementById('tip-title').textContent = t.tipTitle;
    document.getElementById('tip-sub').textContent = t.tipSub;
    document.getElementById('tip-btn').textContent = t.tipBtn;
    document.getElementById('tip-display').textContent = t.tipDefault;
    document.getElementById('game-title').textContent = t.gameTitle;
    document.getElementById('game-sub').innerHTML = t.gameSub;
    document.getElementById('shuffle-btn').textContent = t.shuffleBtn;
    document.getElementById('sim-btn').textContent = t.simBtn;
    
    document.getElementById('about-heading').textContent = t.aboutHeading;
    document.getElementById('about-sub').textContent = t.aboutSub;
    document.getElementById('about-sports-title').textContent = t.aboutSportsTitle;
    document.getElementById('about-sports-desc').textContent = t.aboutSportsDesc;
    document.getElementById('about-games-title').textContent = t.aboutGamesTitle;
    document.getElementById('about-travel-title').textContent = t.aboutTravelTitle;
    document.getElementById('about-travel-desc').textContent = t.aboutTravelDesc;

    document.getElementById('sports-heading').textContent = t.sportsHeading;
    document.getElementById('sports-sub').textContent = t.sportsSub;

    document.getElementById('text-learn').textContent = t.learn;
    document.getElementById('text-or').textContent = t.or;

    const themeBtn = document.getElementById('theme-btn');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? t.lightMode : t.darkMode;
}

/* LIGHT / DARK MODE TOGGLE */
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const t = i18n[currentLang];
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? t.lightMode : t.darkMode;
});

/* WEB DEV TIP GENERATOR */
const tipBtn = document.getElementById('tip-btn');
const tipDisplay = document.getElementById('tip-display');

tipBtn.addEventListener('click', function() {
    const tipsList = i18n[currentLang].tips;
    const randomIndex = Math.floor(Math.random() * tipsList.length);
    tipDisplay.textContent = tipsList[randomIndex];
});

/* ALL-TIME RANDOM BASKETBALL GAME LOGIC */
const allTimePlayers = {
    PG: [
        { name: "Magic Johnson", ovr: 97 },
        { name: "Steph Curry", ovr: 96 },
        { name: "Oscar Robertson", ovr: 95 },
        { name: "Isiah Thomas", ovr: 93 },
        { name: "John Stockton", ovr: 92 },
        { name: "Luka Doncic", ovr: 95 },
        { name: "Jason Kidd", ovr: 91 },
        { name: "Steve Nash", ovr: 90 }
    ],
    SG: [
        { name: "Michael Jordan", ovr: 99 },
        { name: "Kobe Bryant", ovr: 97 },
        { name: "Dwyane Wade", ovr: 94 },
        { name: "Jerry West", ovr: 95 },
        { name: "Allen Iverson", ovr: 91 },
        { name: "James Harden", ovr: 92 },
        { name: "Reggie Miller", ovr: 89 },
        { name: "Ray Allen", ovr: 89 }
    ],
    SF: [
        { name: "LeBron James", ovr: 98 },
        { name: "Larry Bird", ovr: 96 },
        { name: "Kevin Durant", ovr: 96 },
        { name: "Julius Erving", ovr: 94 },
        { name: "Kawhi Leonard", ovr: 92 },
        { name: "Scottie Pippen", ovr: 92 },
        { name: "Elgin Baylor", ovr: 93 },
        { name: "Dominique Wilkins", ovr: 90 }
    ],
    PF: [
        { name: "Tim Duncan", ovr: 97 },
        { name: "Giannis Antetokounmpo", ovr: 97 },
        { name: "Karl Malone", ovr: 95 },
        { name: "Charles Barkley", ovr: 94 },
        { name: "Dirk Nowitzki", ovr: 94 },
        { name: "Kevin Garnett", ovr: 94 },
        { name: "Dennis Rodman", ovr: 89 },
        { name: "Anthony Davis", ovr: 93 }
    ],
    C: [
        { name: "Kareem Abdul-Jabbar", ovr: 98 },
        { name: "Wilt Chamberlain", ovr: 98 },
        { name: "Bill Russell", ovr: 97 },
        { name: "Shaquille O'Neal", ovr: 97 },
        { name: "Hakeem Olajuwon", ovr: 96 },
        { name: "Nikola Jokic", ovr: 98 },
        { name: "David Robinson", ovr: 94 },
        { name: "Patrick Ewing", ovr: 92 }
    ]
};

const positions = ['PG', 'SG', 'SF', 'PF', 'C'];
let currentDraftedRoster = {};

function draftSingleRandom(pos) {
    const list = allTimePlayers[pos];
    const randomPlayer = list[Math.floor(Math.random() * list.length)];
    currentDraftedRoster[pos] = randomPlayer;

    document.getElementById(`name-${pos}`).textContent = randomPlayer.name;
    document.getElementById(`ovr-${pos}`).textContent = `${randomPlayer.ovr} OVR`;
    document.getElementById(`card-${pos}`).className = 'player-card filled';

    checkRosterComplete();
}

function draftAllRandom() {
    positions.forEach(pos => {
        draftSingleRandom(pos);
    });
    document.getElementById('result-screen').style.display = 'none';
}

function checkRosterComplete() {
    let isComplete = true;
    positions.forEach(pos => {
        if (!currentDraftedRoster[pos]) {
            isComplete = false;
        }
    });
    document.getElementById('sim-btn').disabled = !isComplete;
}

function runSeasonSimulation() {
    const simBtn = document.getElementById('sim-btn');
    const progressBox = document.getElementById('sim-progress');
    const progressBar = document.getElementById('progress-bar-fill');
    const ticker = document.getElementById('sim-ticker');
    const resultScreen = document.getElementById('result-screen');

    simBtn.disabled = true;
    resultScreen.style.display = 'none';
    progressBox.style.display = 'block';

    let totalOvr = 0;
    positions.forEach(pos => {
        totalOvr += currentDraftedRoster[pos].ovr;
    });
    const avgOvr = totalOvr / 5;

    let game = 0;
    let wins = 0;
    let losses = 0;
    const opponents = ["Celtics", "Lakers", "Warriors", "Bulls", "Heat", "Nuggets", "Mavs", "Bucks", "Spurs", "Knicks"];

    const interval = setInterval(() => {
        game++;
        const winChance = (avgOvr - 72) / 28;
        const isWin = Math.random() < winChance;

        if (isWin) { wins++; } else { losses++; }

        const opp = opponents[Math.floor(Math.random() * opponents.length)];
        const teamPts = Math.floor(100 + Math.random() * 25 + (isWin ? 8 : 0));
        const oppPts = isWin ? teamPts - Math.floor(1 + Math.random() * 15) : teamPts + Math.floor(1 + Math.random() * 15);

        ticker.textContent = `Game ${game}/82: ${isWin ? 'WIN' : 'LOSS'} vs ${opp} (${teamPts}-${oppPts}) | Record: ${wins}-${losses}`;
        progressBar.style.width = `${(game / 82) * 100}%`;

        if (game >= 82) {
            clearInterval(interval);
            showFinalResult(wins, losses, avgOvr);
        }
    }, 25);
}

function showFinalResult(wins, losses, avgOvr) {
    const resultScreen = document.getElementById('result-screen');
    const resultTitle = document.getElementById('result-title');
    const resultRecord = document.getElementById('result-record');
    const resultDesc = document.getElementById('result-desc');
    const simBtn = document.getElementById('sim-btn');

    resultScreen.style.display = 'block';
    resultRecord.textContent = `${wins} - ${losses}`;

    if (wins === 82) {
        resultScreen.className = 'result-screen perfect';
        resultTitle.textContent = "🏆 82-0 PERFECT UNBEATEN SEASON!";
        resultDesc.textContent = `LEGENDARY ALL-TIME ROSTER! Average Rating: ${avgOvr.toFixed(1)} OVR. You created an untouchable dynasty!`;
    } else if (wins >= 72) {
        resultScreen.className = 'result-screen';
        resultTitle.textContent = "🔥 Championship Contender!";
        resultDesc.textContent = `Historic Run! Average Rating: ${avgOvr.toFixed(1)} OVR. So close to 82-0! Draw again to try another hall-of-fame squad!`;
    } else {
        resultScreen.className = 'result-screen';
        resultTitle.textContent = "🏀 Playoff Team";
        resultDesc.textContent = `Average Rating: ${avgOvr.toFixed(1)} OVR. Draw new legends to chase 82-0!`;
    }

    simBtn.disabled = false;
}
