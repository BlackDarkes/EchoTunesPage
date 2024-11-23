/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect, useContext } from "react";
import "./style/MusicBar.css";
import { musics } from "../../Music/musics";
import PlayMusic from "../AssetsBlocks/MusicBar/NavigationMusic/MusicPlay"
import StopMusic from "../AssetsBlocks/MusicBar/NavigationMusic/StopMusic";
import MaxSound from "../AssetsBlocks/MusicBar/Sound/MaxSound";
import MiddleSound from "../AssetsBlocks/MusicBar/Sound/MiddleSound";
import LowSound from "../AssetsBlocks/MusicBar/Sound/LowSound";
import NotSound from "../AssetsBlocks/MusicBar/Sound/NotSound";
import BackMusic from "../AssetsBlocks/MusicBar/NavigationMusic/BackMusic";
import RandomMusic from "../AssetsBlocks/MusicBar/NavigationMusic/RandomMusic";
import NextMusic from "../AssetsBlocks/MusicBar/NavigationMusic/NextMusic";
import RepeatMusic from "../AssetsBlocks/MusicBar/NavigationMusic/ReapeatMusic";
import AddPlaylist from "../AssetsBlocks/MusicBar/Sound/AddPlaylist";

const MusicBar = () => {
    const [play, setPlay] = useState(false);
    const [valueSound, setValueSound] = useState(0.05);
    const [count, setCount] = useState(0);
    const [track, setTrack] = useState(new Audio(musics[count].music));
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const newTrack = new Audio(musics[count].music);
        newTrack.volume = valueSound;

        newTrack.onloadedmetadata = () => {
            setDuration(newTrack.duration);
        };

        const updateTime = () => {
            setCurrentTime(newTrack.currentTime);
        };

        // Обработчик окончания трека
        const handleEnded = () => {
            nextTrack();
        };

        newTrack.addEventListener('timeupdate', updateTime);
        newTrack.addEventListener('ended', handleEnded); // Добавляем обработчик

        setTrack(newTrack);

        return () => {
            newTrack.pause();
            newTrack.currentTime = 0;
            newTrack.removeEventListener('timeupdate', updateTime);
            newTrack.removeEventListener('ended', handleEnded); // Убираем обработчик
        };
    }, [count]);

    useEffect(() => {
        if (track) {
            track.volume = valueSound;
            if (play) {
                track.play().catch(error => {
                    console.error("Error playing the track:", error);
                });
            } else {
                track.pause();
            }
        }
    }, [play, track, valueSound]);

    const nextTrack = () => {
        setCount((prevIndex) => (prevIndex + 1) % musics.length);
        setCurrentTime(0);
        // Не меняем состояние play здесь
    };

    const lastTrack = () => {
        setCount((prevIndex) => (prevIndex - 1 + musics.length) % musics.length);
        setCurrentTime(0);
        // Не меняем состояние play здесь
    };

    const togglePlayPause = () => {
        setPlay(prevPlay => !prevPlay);
    };

    const handleVolumeChange = (event) => {
        const volume = parseFloat(event.target.value);
        setValueSound(volume);
    };

    const handleTimeChange = (event) => {
        const time = parseFloat(event.target.value);
        setCurrentTime(time);
        if (track) {
            track.currentTime = time;
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <section className="musicBar">
            <input style={{cursor: "pointer"}}
                type="range"
                className="musicBar__progress"
                min="0"
                step="0.05"
                max={duration}
                value={currentTime}
                onChange={handleTimeChange}/>
            <div className="musicBar__block">
                <div className="bar">
                    <div className="bar-info">
                        <p className="bar-info__time"><span className="start-time">{formatTime(currentTime)}</span> / <span className="full-time">{formatTime(duration)}</span></p>
                        <p className="bar-info__name">{musics[count].name} / {musics[count].author}</p>
                    </div>
                    <div className="bar-nav">
                        <button type="button" className="bar-nav__randomMusic">
                            <RandomMusic/>
                        </button>
                        <div className="navigation">
                            <button type="button" className="navigation__previous navigation__button" onClick={lastTrack}>
                                <BackMusic/>
                            </button>
                            <button type="button" className="navigation__play navigation__button" onClick={togglePlayPause}>
                                {play ? <StopMusic/> : <PlayMusic/>}
                            </button>
                            <button type="button" className="navigation__next navigation__button" onClick={nextTrack}>
                                <NextMusic/>
                            </button>
                        </div>
                        <button type="button" className="bar-nav__repeatMusic">
                            <RepeatMusic/>
                        </button>
                    </div>
                    <div className="bar-sound">
                        <button type="button" className="bar-sound__addPlaylist">
                            <AddPlaylist/>
                        </button>
                        <div className="sound">
                            <button type="button" className="sound__image" onClick={() => {
                                valueSound >= 0.01 ? setValueSound(0) : setValueSound(0.03)
                            }}>
                                {valueSound === 0 ? <NotSound/> : ""}
                                {valueSound >= "0.01" && valueSound <= 0.14 ? <LowSound/> : ""}
                                {valueSound >= "0.15" && valueSound <= 0.99 ? <MiddleSound/> : ""}
                                {valueSound === 1 ? <MaxSound/> : ""}
                            </button>
                            <input className="sound__progress"
                                style={{cursor: "pointer"}}
                                type="range"
                                value={valueSound}
                                min="0"
                                step="0.01"
                                max="1"
                                onChange={handleVolumeChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default MusicBar;