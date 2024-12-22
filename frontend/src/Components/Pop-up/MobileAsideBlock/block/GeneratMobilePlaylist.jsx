import { Link } from "react-router-dom";

const GeneratMobilePlaylist = ({name, index}) => {
    return ( 
        <Link className="playlist-block__playlists" to={`/EchoTunesPage/playlists/music/${index}`}><p className="playlist-block__text">{name}</p></Link>
    );
}
 
export default GeneratMobilePlaylist;