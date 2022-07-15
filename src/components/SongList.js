import React from "react";
import { connect } from "react-redux";
import selectSong from "../actions/index";

function SongList(props) {
  return (
    <div>
      {console.log(props)}
      {props.songs.map((song) => {
        return (
          <div className="item" key={song.title}>
            <div className="content">{song.title}</div>
            <button className="btn" onClick={() => props.selectSong(song)}>
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
}
// converting all the states to props
function mapStateToProps(state) {
  console.log(state);
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);
