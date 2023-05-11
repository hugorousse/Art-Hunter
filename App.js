import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ArtworkList from './components/ArtworkList';
import ArtworkDetail from './components/ArtworkDetail';
import SearchBar from './components/SearchBar';
import artworks from './data/artworks';

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
    <View style={styles.app}>
      <Text style={styles.heading}>Œuvres d'Art</Text>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.content}>
        <ArtworkList
          artworks={filteredArtworks.length > 0 ? filteredArtworks : artworks}
          onArtworkSelect={handleArtworkSelect}
        />
        {selectedArtwork && <ArtworkDetail artwork={selectedArtwork} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
});

export default App;
