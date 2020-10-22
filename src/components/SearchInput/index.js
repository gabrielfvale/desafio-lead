import React from 'react';
import { Alert } from 'react-native';
import { InputContainer, IconContainer, Input } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { useState } from 'react';
import { connect } from 'react-redux';

const SearchInput = ({ currentTheme, onSubmit }) => {
  const [inputData, setInputData] = useState('');

  const validateAndSubmit = () => {
    if (inputData.trim()) {
      onSubmit({ text: inputData });
    }
  }

  return (
    <InputContainer>
      <IconContainer>
        <Icon
          name="search"
          size={16}
          color={currentTheme.textOnP}
        />
      </IconContainer>
      <Input
        value={inputData}
        placeholder="Search movies"
        placeholderTextColor={currentTheme.textOnP}
        returnKeyType="search"
        onSubmitEditing={validateAndSubmit}
        onChangeText={setInputData}
      />
    </InputContainer>
  );
};

const mapState = state => ({ currentTheme: state.theme.theme })

export default connect(mapState)(SearchInput);
