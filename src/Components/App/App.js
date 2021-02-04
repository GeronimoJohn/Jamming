import React, { Component } from 'react'
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import './App.css';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 'id1'}]
    }
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
    </div>
    )
  }
}

export default App
