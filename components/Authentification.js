import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getArtworks } from '../Fire'; // Importez la fonction de récupération des œuvres d'art depuis Firebase

const Authentification = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setError(null);
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Connexion réussie, récupérez les œuvres d'art depuis Firebase
        getArtworks((artworks) => {
          // Fournissez les œuvres d'art à l'application principale via la fonction de fermeture
          onClose(artworks);
        });
      })
      .catch((error) => {
        // Erreur lors de la connexion, affichez l'erreur à l'utilisateur
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentification</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Authentification;
