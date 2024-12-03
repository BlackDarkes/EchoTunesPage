import React from "react";
import "./style/App.css";
import EchoTunes from "./Pages/EchoTunesPage/EchoTunes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlaylistPage from "./Pages/PlayListPage/Playlist";
import PlaylistMusic from "./Pages/PlaylistMusic/PlaylistMusic";
import MusicBar from "./Components/MusicBar/MusicBar";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EchoTunes/>
  },
  {
    path: "/EchoTunesPage/playlists",
    element: <PlaylistPage/>
  },
  {
    path: "/EchoTunesPage/playlists/music/:number", // Убедитесь, что этот путь правильный
    element: <PlaylistMusic/>
  },
  {
    path: "*", // Этот маршрут должен быть последним
    element: <PageNotFound/> 
  }
], { basename: "/EchoTunesPage" });

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <MusicBar/>
    </div>
  );
}

export default App;
