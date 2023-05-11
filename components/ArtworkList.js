import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import Artwork from '../components/Artwork';
import { database } from '../firebaseConfig';
import { getArtworks, addArtwork } from '../Fire';

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);

  const createArtwork = () => {
    const artworkData = {
      id: "ur5ONg87G0uD8HbVvAKw",
      title: "La Joconde",
      artist: "Leonardo da Vinci",
      date: "1503",
      description: "Un portrait célèbre peint par Leonardo da Vinci",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_natural_color.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_natural_color.jpg",
    };
    
    addArtwork(artworkData)

    /* const artworksRef = database.ref('artworks');
    artworksRef.push(artworkData)
      .then(() => {
        console.log("Données ajoutées avec succès !");
      })
      .catch(error => {
        console.error("Erreur lors de l'ajout des données :", error);
      }); */
  };

  useEffect(() => {
    getArtworks(artworks => {
      setArtworks(artworks)
    })
  }, []);

  return (
    <View>
      {artworks.map(artwork => (
        <Artwork key={artwork.id} artwork={artwork} />
      ))}
      <Button title="Ajouter une œuvre d'art" onPress={createArtwork} />
    </View>
  );
};

export default ArtworkList;
