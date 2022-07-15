import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetails";

function App() {
  return (
    <>
      <div className="app">
        <div id="title">My Music List 🎶 </div>
        <SongList />
        <SongDetails />
      </div>
    </>
  );
}

export default App;
