import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import ArtworkList from './components/ArtworkList';
import ArtworkDetail from './components/ArtworkDetail';
import SearchBar from './components/SearchBar';
import Authentification from './components/Authentification';
import { getArtworks } from './Fire'; // Importez les fonctions de Firebase

const App = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true);

  const handleSearch = (searchTerm) => {
    const filtered = artworks.filter(artwork =>
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArtworks(filtered);
  };

  const handleArtworkSelect = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleAuthModalClose = () => {
    setIsAuthModalVisible(false);
  };

  // Utilisez useEffect pour récupérer les œuvres d'art à partir de Firebase
  useEffect(() => {
    getArtworks((artworks) => {
      setFilteredArtworks(artworks);
    });
  }, []);

  return (
    <View style={styles.app}>
      <Text style={styles.heading}>Œuvres d'Art</Text>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.content}>
        <Modal visible={isAuthModalVisible} onRequestClose={handleAuthModalClose}>
          <Authentification onClose={handleAuthModalClose} />
        </Modal>
        <ArtworkList
          artworks={filteredArtworks}
          onArtworkSelect={handleArtworkSelect}
        />
        {selectedArtwork && (
          <Modal visible={true} onRequestClose={() => setSelectedArtwork(null)}>
            <ArtworkDetail artwork={selectedArtwork} />
            <Button title="Fermer" onPress={() => setSelectedArtwork(null)} />
          </Modal>
        )}
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
