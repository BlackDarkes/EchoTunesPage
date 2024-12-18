import { useState } from "react";
import musicImage from "../../../Assets/Secondary/MusicBlock/КартинкаМузыки.svg"
import RenameMusic from "../../AssetsBlocks/MusicBlock/RenameMusic";
import DeleteMusic from "../../AssetsBlocks/MusicBlock/DeleteMusic";
import PlayMusic from "../../AssetsBlocks/MusicBar/NavigationMusic/MusicPlay";
import StopMusic from "../../AssetsBlocks/MusicBar/NavigationMusic/StopMusic";
import ThreePoints from "../../AssetsBlocks/MusicBlock/ThreePoints";

const Music = ({musicName, author, isPlay}) => {
    const [play, setPlay] = useState(false)

    return (
        <section className="music-block">
            <audio src=""></audio>
            <div className="block-info">
                <button type="button" className="block-info__playPause" onClick={() => setPlay(!play)}>
                    {play ? <StopMusic/> : <PlayMusic/>}
                </button>
                <img src={musicImage} alt="картинка музыки" className="block-info__image" width={40} height={40}/>
                <p className="block-text">
                    <span className="block-text__name">{musicName}</span>
                    <span className="block-text__author">{author}</span>
                </p>
            </div>
            <div className="block-button">
                <div className="buttons">
                    <button type="button" className="block-button__rename block-button__button"><RenameMusic/></button>
                    <button type="button" className="block-button__delete block-button__button"><DeleteMusic/></button>
                </div>
                <p className="block-time">0:00/3:30</p>
                <button type="button" className="block-button__3points"><ThreePoints/></button>
            </div>
        </section>
    );
}
 
export default Music;