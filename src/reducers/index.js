import { combineReducers } from "redux";
// songs list
// select song
function songsReducer() {
  return [
    { title: "Love U Zindagi", duration: "2:30" },
    { title: "Phir Le aya Dil", duration: "3:45" },
    { title: "Kun Faya", duration: "3:15" },
    { title: "Chala Jata Hoon", duration: "4:20" },
    { title: "Kho Gye Hm Kha", duration: "4:20" },
  ];
}

function selectedSongReducer(selectedSong = null, action) {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
