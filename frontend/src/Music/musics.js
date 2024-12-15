const musicData = [
    {
        name: "Opening Titles",
        author: "Hans Zimmer",
        music: require("./music/Hans Zimmer-Opening Titles.mp3"),
    },
    {
        name: "Iabloki-na-snegu",
        author: "Chernikovskaia-khata",
        music: require("./music/russian-doomer-chernikovskaia-khata-iabloki-na-snegu.mp3"),
    },
    {
        name: "Signal",
        author: "TK from 凛として時雨",
        music: require("./music/tk from signal.mp3"),
    },
    {
        name: "Film A Moment",
        author: "TK from 凛として時雨",
        music: require("./music/tk-from-film-a-moment.mp3"),
    },
    {
        name: "Fuyu no hanashi",
        author: "Given",
        music: require("./music/Fuyu_no_Hanashi.mp3"),
    },
    {
        name: "Unravel",
        author: "TK from 凛として時雨",
        music: require("./music/TK from Ling tosite sigure-Unravel.mp3"),
    },
    {
        name: "Antigravity",
        author: "Starset",
        music: require("./music/Starset-Antigravity.mp3"),
    },
    {
        name: "Radio ga ga",
        author: "Queen",
        music: require("./music/queen-radio-ga-ga.mp3"),
    },
    {
        name: "Mephisto",
        author: "Quen bee",
        music: require("./music/Queen Bee-Mephisto.mp3"),
    },
    {
        name: "Empowering Yourself",
        author: "Olivier Deriviere",
        music: require("./music/Olivier_Deriviere_Empowering_Yourself.mp3"),
    },
    {
        name: "Feed A God Eater OP",
        author: "OLDCODEX",
        music: require("./music/OLDCODEX-Feed A God Eater OP.mp3"),
    },
];

export const musics = musicData.map((music, index) => ({
    id: index,
    ...music,
}));
