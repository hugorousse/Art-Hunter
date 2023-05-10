import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from './Components/AddButton';



const App = () => {
  const handlePress = () => {
    console.log('Le bouton Ajouter une œuvre a été pressé.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue sur Art Hunter !</Text>
      <AddButton content="Ajouter une œuvre" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;



