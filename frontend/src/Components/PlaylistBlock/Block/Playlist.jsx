import React from "react";

const Playlist = ({image, name}) => {
    return (
        <div className="playlist-block">
            <button>
                <img src={image} alt="" />
            </button>
        </div>
    );
}
 
export default Playlist;