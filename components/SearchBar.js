import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (text) => {
    setSearchValue(text);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        value={searchValue}
        onChangeText={handleInputChange}
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
