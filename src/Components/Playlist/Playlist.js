import React from "react";
import "./Playlist.js";

const Playlist = () => {
  return (
    <div class="Playlist">
      <input value="New Playlist" />
      {/* <!-- Add a TrackList component --> */}
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
