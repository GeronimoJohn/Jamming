import React, { Component } from "react";
import Track from "../Track/Track";
import "./Tracklist.css";

export class Tracklist extends Component {
  render() {
    return (
      <div className="TrackList">
        {/* gets pass in two different props/states - playlistTracks and searchResults */}
        {this.props.tracks.map((track) => {
          return (
            <Track track={track} key={track.id} addon={this.props.addons} />
          );
        })}
      </div>
    );
  }
}

export default Tracklist;
