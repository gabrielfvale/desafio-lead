import React from 'react';
import { Container } from './styles';
import { View, Text } from 'react-native';

import SearchInput from '../SearchInput';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = ({ navigation }) => {

  return (
    <Container>
      <SearchInput onSubmit={({ text }) => navigation.navigate('Search', { queryText: text })}/>
      <ThemeSwitcher />
    </Container>
  );
};

export default Header;
