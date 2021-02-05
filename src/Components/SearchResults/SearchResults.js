import React, { Component } from "react";
import TrackList from "../Tracklist/Tracklist";
import "./SearchResults.css";

export class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <TrackList tracks={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;
