import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Artwork = ({ artwork, onArtworkSelect }) => {
  const handleArtworkClick = () => {
    onArtworkSelect(artwork);
  };

  return (
    <TouchableOpacity style={styles.artworkContainer} onPress={handleArtworkClick}>
      <Image source={{ uri: artwork.image }} style={styles.artworkImage} />
      <Text style={styles.artworkTitle}>{artwork.title}</Text>
      <Text style={styles.artworkArtist}>Par {artwork.artist}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  artworkContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  artworkImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  artworkTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  artworkArtist: {
    marginTop: 5,
    fontSize: 16,
  },
};

export default Artwork;
