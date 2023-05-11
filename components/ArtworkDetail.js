import React from 'react';
import { View, Text, Image } from 'react-native';

const ArtworkDetail = ({ artwork }) => {
  return (
    <View style={styles.artworkDetailContainer}>
      <Text style={styles.artworkTitle}>{artwork.title}</Text>
      <Text style={styles.artworkArtist}>Par {artwork.artist}</Text>
      <Image source={{ uri: artwork.image }} style={styles.artworkImage} />
      <Text style={styles.artworkDescription}>{artwork.description}</Text>
      <Text style={styles.artworkDimensions}>Dimensions : {artwork.dimensions}</Text>
    </View>
  );
};

const styles = {
  artworkDetailContainer: {
    alignItems: 'center',
    padding: 20,
  },
  artworkTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artworkArtist: {
    fontSize: 18,
    marginBottom: 10,
  },
  artworkImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  artworkDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  artworkDimensions: {
    fontSize: 16,
  },
};

export default ArtworkDetail;
