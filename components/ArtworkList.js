import React, { useState, useEffect } from 'react';
import { View, Button, Picker, TextInput } from 'react-native';
import Artwork from '../components/Artwork';
import { getArtworks, addArtwork, deleteArtwork } from '../Fire';

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const createArtwork = () => {
    if (selectedArtwork) {
      addArtwork(selectedArtwork);
    }
  };

  const removeArtwork = () => {
    if (selectedArtwork) {
      deleteArtwork(selectedArtwork);
      setSelectedArtwork(null);
    }
  };

  const showArtworkDescription = (artwork) => {
    console.log(artwork.description);
  };

  const showArtworkDate = (artwork) => {
    console.log(artwork.date);
  };

  useEffect(() => {
    getArtworks(artworks => {
      setArtworks(artworks);
    });
  }, []);

  const filteredArtworks = artworks.filter(artwork => {
    return artwork.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <View>
      <TextInput
        placeholder="Rechercher une œuvre d'art"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      {filteredArtworks.map(artwork => (
        <Artwork key={artwork.id} artwork={artwork} onClick={showArtworkDescription} onClick={showArtworkDate} />
      ))}
      <Picker
        selectedValue={selectedArtwork ? selectedArtwork.id : null}
        onValueChange={(itemValue) => {
          const selected = artworks.find(artwork => artwork.id === itemValue);
          setSelectedArtwork(selected);
        }}
      >
        <Picker.Item label="Sélectionnez une œuvre" value={null} />
        {filteredArtworks.map(artwork => (
          <Picker.Item key={artwork.id} label={artwork.title} value={artwork.id} />
        ))}
      </Picker>
      <Button title="Ajouter une œuvre d'art" onPress={createArtwork} />
      <Button title="Supprimer l'œuvre sélectionnée" onPress={removeArtwork} />
    </View>
  );
};

export default ArtworkList;
