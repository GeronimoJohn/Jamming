import React, { Component } from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

export class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        {/* gets passed on with the playlistTracks state and passes it on as a prop to Tracklsit */}
        <Tracklist
          tracks={this.props.playlistTracks}
          removetrack={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
