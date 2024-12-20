import React from "react";
import { Link } from "react-router-dom";

const Playlist = ({image, name, index}) => {
    return (
        <div className="playlist-block">
            <Link to={`/playlists/music/${index}`} className="playlist-block__button">
                <img src={image} alt="" className="playlist-block__image"/>
                <p className="playlist-block__name">{name}</p>
            </Link>
        </div>
    );
}
 
export default Playlist;