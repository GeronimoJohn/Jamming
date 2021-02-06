import React, { Component } from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

export class Playlist extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    // NOTE TO SELF: you pass in data in brackets not in equals
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        {/* gets passed on with the playlistTracks state and passes it on as a prop to Tracklsit */}
        <Tracklist
          tracks={this.props.playlistTracks}
          removetrack={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
