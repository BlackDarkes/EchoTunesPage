import React, { createContext, useState } from "react";

export const PlaylistContext = createContext();

const PlaylistProvider = ({children}) => {
    const [open, setOpen] = useState(false);

    return (
        <PlaylistContext.Provider value={{open, setOpen}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export default PlaylistProvider;