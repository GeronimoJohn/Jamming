import React, { Component } from "react";
import Track from "../Track/Track";
import "./Tracklist.css";

export class Tracklist extends Component {
  render() {
    return (
      <div className="TrackList">
        {/* to do: Below comment */}
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {this.props.tracks.map((track) => {
          return <Track track={track} key={track.id} />;
        })}
      </div>
    );
  }
}

export default Tracklist;
