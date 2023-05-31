import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (text) => {
    setSearchValue(text);
  };

  const handleSearchClick = () => {
    const searchTerm = inputRef.current.value;
    onSearch(searchTerm); // Utilisez directement la variable onSearch, pas props.onSearch
  };

  const inputRef = useRef(null);

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        value={searchValue}
        onChangeText={handleInputChange}
        ref={inputRef} // Assurez-vous d'ajouter cette ligne pour assigner la référence
      />
      <Button
        title="Rechercher"
        onPress={handleSearchClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SearchBar;
