import { createContext } from "react";
import { PlaylistContext } from "./AddPlaylistContext";

export const PlyalistContext = createContext();

const PlaylistProvider = ({children}) => {
    return (
        <PlaylistContext.Provider value={{}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export default PlaylistProvider;