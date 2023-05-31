import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Artwork = ({ artwork, onClick }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <TouchableOpacity onPress={() => onClick(artwork)}>
      <View style={styles.container}>
        <Image source={{ uri: artwork.image }} style={styles.image} />
        <Text style={styles.title}>{artwork.title}</Text>
        {showDescription && (
          <View>
            <Text style={styles.text}>Artist: {artwork.artist}</Text>
            <Text style={styles.text}>Date: {artwork.date}</Text>
            <Text style={styles.text}>Description: {artwork.description}</Text>
          </View>
        )}
        <TouchableOpacity onPress={toggleDescription} style={styles.button}>
          <Text style={styles.buttonText}>{showDescription ? 'Cacher la Description' : 'Description'}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#e6e6e6',
    padding: 5,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 14,
  },
});

export default Artwork;
