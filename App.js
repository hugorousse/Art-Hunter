import React, { useState } from 'react';
import ArtworkList from './components/ArtworkList';
import ArtworkDetail from './components/ArtworkDetail';
import SearchBar from './components/SearchBar';
import artworks from './data/artworks';
import './App.css';

const App = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [filteredArtworks, setFilteredArtworks] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = artworks.filter(artwork =>
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtworks(filtered);
  };

  const handleArtworkSelect = (artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <div className="app">
      <h1>Œuvres d'Art</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <ArtworkList
          artworks={filteredArtworks.length > 0 ? filteredArtworks : artworks}
          onArtworkSelect={handleArtworkSelect}
        />
        {selectedArtwork && <ArtworkDetail artwork={selectedArtwork} />}
      </div>
    </div>
  );
};

export default App;