import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Button, TextInput, Image  } from 'react-native';
import ArtworkList from './components/ArtworkList';
import ArtworkDetail from './components/ArtworkDetail';
import Authentification from './components/Authentification';
import InscriptionModal from './components/InscriptionModal';
import { getArtworks, db } from './Fire';
import { query, onSnapshot, collection, where } from 'firebase/firestore'; // Importez ces modules depuis 'firebase/firestore'
//import SplashScreen from 'react-native-splash-screen';
//import SplashScreen from './components/SplashScreen';

const App = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [filteredArtworks, setFilteredArtworks] = useState([]);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(true);
  const [isArtworkModalVisible, setIsArtworkModalVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInscriptionModal, setIsInscriptionModalVisible] = useState(false);
  const [screenStack, setScreenStack] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = () => {
    const q = query(
      collection(db, 'artworks'),
      where('title', '==', searchTerm)
    );

    onSnapshot(q, (snapshot) => {
      const artworks = [];
      snapshot.forEach((doc) => {
        artworks.push({ id: doc.id, ...doc.data() });
      });

      setFilteredArtworks(artworks);
    });
  };

  const handleInscriptionModal = () => {
    setIsModalVisible(false);
    setIsInscriptionModalVisible(true);
  };

  const handleRedirect = () => {
    setIsModalVisible(true);
    setIsInscriptionModalVisible(false);
  };

  const handleArtworkSelect = (artwork) => {
    setSelectedArtwork(artwork);
    setScreenStack((prevStack) => [...prevStack, 'ArtworkDetail']);
  };

  const handleAuthModalClose = () => {
    setIsAuthModalVisible(false);
  };

  const handleArtworkModalClose = () => {
    setSelectedArtwork(null);
    setScreenStack((prevStack) => prevStack.slice(0, prevStack.length - 1));
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setIsAuthModalVisible(false);
    setScreenStack(['ArtworkList']);
  };

  useEffect(() => {
    getArtworks((artworks) => {
      setFilteredArtworks(artworks);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
        <Image source={require('./assets/bow.png')} style={{ width: '100%', height: '80%', resizeMode: 'contain' }} />
      </View>
    );
  }

  const renderScreen = () => {
    if (isAuthModalVisible) {
      return (
        <Modal visible={isAuthModalVisible} onRequestClose={handleAuthModalClose}>
          <Authentification onLoginSuccess={handleLoginSuccess} />
        </Modal>
      );
    } else if (isArtworkModalVisible) {
      return (
        <Modal visible={isArtworkModalVisible} onRequestClose={handleArtworkModalClose}>
          {selectedArtwork && (
            <View>
              <ArtworkDetail artwork={selectedArtwork} />
              <Button title="Fermer" onPress={handleArtworkModalClose} />
            </View>
          )}
        </Modal>
      );
    } else {
      if (screenStack.length > 0) {
        const currentScreen = screenStack[screenStack.length - 1];
        switch (currentScreen) {
          case 'ArtworkList':
            return (
              <>
                <ArtworkList
                  artworks={filteredArtworks}
                  onArtworkSelect={handleArtworkSelect}
                />
              </>
            );
          case 'ArtworkDetail':
            return (
              <ArtworkDetail
                artwork={selectedArtwork}
                onClose={handleArtworkModalClose}
              />
            );
          default:
            return null;
        }
      }
    }
  };
  

  return (
    <View style={styles.app}>
      <Text style={styles.heading}>Œuvres d'Art</Text>
      <View style={styles.content}>{renderScreen()}</View>
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    paddingHorizontal: 10,
  },
});

export default App;
