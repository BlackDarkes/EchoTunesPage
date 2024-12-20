import { musics } from "../Music/musics"

const playlistsData = [
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name1",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name2",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name3",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name4",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name5",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name6",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name7",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name8",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name9",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name10",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name11",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "Name12",
        about: "About",
        music: [
            musics[0],
            musics[4],
            musics[6],
        ]
    },
    {
        img: require("../Assets/Secondary/PlayListBlock/КартинкаПлейлиста.png"),
        name: "very very very very very very large",
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
