import React, { Component } from "react";
import TrackList from "../Tracklist/Tracklist";
import "./SearchResults.css";

export class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/* tracklist component that passes in different props with and without states*/}
        <TrackList
          tracks={this.props.searchResults}
          addons={this.props.addOn}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
