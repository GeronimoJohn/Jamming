import React from "react";
import "./Playlist.js";

const Playlist = () => {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      {/* <!-- Add a TrackList component --> */}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
