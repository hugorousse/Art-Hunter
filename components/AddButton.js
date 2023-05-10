import React from 'react';
import { Button } from 'react-native';

const AddButton = ({ content, onPress }) => (
  <Button title={content} onPress={onPress} />
);

export default AddButton;
