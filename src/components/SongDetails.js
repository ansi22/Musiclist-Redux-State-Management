import React from "react";
import { connect } from "react-redux";

function SongDetails({ song }) {
  return (
    <div className="center">
      <div id="title-1">Song Description 🎶 </div>
      {!song ? (
        <>Select a Song</>
      ) : (
        <>
          <div className="center-1">
            Selected Song Description:
            <br />
            Title: {song.title}
            <br />
            Duration: {song.duration}
            <br />
            <br />
          </div>
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetails);
