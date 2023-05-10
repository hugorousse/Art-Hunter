import React, { useState } from 'react';
import ArtworkList from './components/ArtworkList';
import ArtworkDetail from './components/ArtworkDetail';
import SearchBar from './components/SearchBar';
import artworks from './data/artworks';
import './App.css';

const App = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleSearch = (searchTerm) => {
    // Implémentez votre logique de recherche ici
    // Par exemple, filtrez les œuvres d'art en fonction du terme de recherche
    // et mettez à jour l'état des œuvres d'art affichées
    console.log(`Recherche : ${searchTerm}`);
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
          artworks={artworks}
          onArtworkSelect={handleArtworkSelect}
        />
        {selectedArtwork && <ArtworkDetail artwork={selectedArtwork} />}
      </div>
    </div>
  );
};

export default App;