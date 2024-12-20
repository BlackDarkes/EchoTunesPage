/* eslint-disable no-unused-vars */
import React from "react";
import { playlists } from "../../Playlists/playlists"
import Playlist from "./Block/Playlist";
import "./style/PlaylistBlock.css";
import AddPlaylist from "./Assets/AddPlaylist";

const PlaylistBlock = () => {
    const generatePlaylist = playlists.map((elem, index) => {
        return <Playlist key={playlists[index].id} image={playlists[index].img} name={playlists[index].name} index={playlists[index].id}/>
    })
    
    return (
        <div className="playlistBlock" >
            <div className="playlistBlock__block">
                <div className="playlist">
                    <button type="button" className="playlist__add"><AddPlaylist/></button>
                    {generatePlaylist}
                </div>
            </div>
        </div>
    );
}
 
export default PlaylistBlock;