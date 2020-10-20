import React from 'react';
import { Container } from './styles';

import SearchInput from '../SearchInput';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {

  return (
    <Container>
      <SearchInput />
      <ThemeSwitcher />
    </Container>
  );
};

export default Header;
