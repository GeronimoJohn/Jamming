import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    // sets the state of the different values
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: "id1" },
        { name: "name2", artist: "artist2", album: "album2", id: "id2" },
        { name: "name3", artist: "artist3", album: "album3", id: "id3" },
      ],
      playlistName: "sample playlist",
      playlistTracks: [
        {
          name: "playlistName1",
          artist: "artist1",
          album: "album1",
          id: "id4",
        },
      ],
    };
    // methods are binded - this updates the state if there is anything that changes within the method
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // add tracks to the playlist
  addTrack(track) {
    let tracks = this.state.playlistTracks;

    // if a track is already saved then dont enable adding it on
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  // removes track from the playlist
  removeTrack(track) {
    let tracks = this.state.playlistTracks;

    // create a new array to filter out or removed the current id that is being clicked
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  // updates the playlists name
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  // enables you to save the playlist
  savePlaylist() {
    alert("this is working");
    let tracksURI = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.state = {
        playlistName: "New Playlist",
        playlistTracks: [],
      };
    });
  }

  // Connects to the spotify api and searchs songs
  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/* passes on the searchResults state and the addTrack method */}
            <SearchResults
              searchResults={this.state.searchResults}
              addOn={this.addTrack}
            />
            {/* passes on the playlistName and playlistTracks states */}
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
