import { musics } from "../Music/musics"

const playlistsData = [
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
];

export const playlists = playlistsData.map((music, index) => ({
    id: index,
    ...music,
}));
