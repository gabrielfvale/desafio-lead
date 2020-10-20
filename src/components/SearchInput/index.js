import React from 'react';
import { InputContainer, IconContainer, Input } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

const SearchInput = ({ currentTheme }) => {
  const navigation = useNavigation();
  const [inputData, setInputData] = useState('');

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
        onSubmitEditing={({ text }) => navigation.navigate('Search', { queryText: text})}
        onChangeText={setInputData}
      />
    </InputContainer>
  );
};

const mapState = state => ({ currentTheme: state.theme.theme })

export default connect(mapState)(SearchInput);
