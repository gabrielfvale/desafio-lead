import React, { useState } from 'react';
import { Modal } from 'react-native';
import FilterButton from '../FilterButton';

import {
  Container,
  Content,
  Header,
  Title,
  Footer,
  FooterButton,
  FooterText,
  GenreButton,
  GenreText,
  GenreList,
} from './styles';

const FilterModal = ({ visible, onRequestClose, genreList, updateGenres }) => {

  const [activeGenres, setActiveGenres] = useState([]);

  const onClose = () => {
    onRequestClose(activeGenres);
  }

  const renderGenres = () => {

    const switchGenre = (active, index, id) => {
      if (active) {
        let newGenres = [...activeGenres];
        newGenres.splice(index, 1);
        setActiveGenres([...newGenres]);
      } else {
        setActiveGenres([...activeGenres, id]);
      }
    }

    return (
      <GenreList>
        {genreList.map(genre => {
          const index = activeGenres.indexOf(genre.id);
          const isActive = index !== -1;
          return (
            <GenreButton
              key={genre.id}
              active={isActive}
              onPress={() => switchGenre(isActive, index, genre.id)}>
              <GenreText active={isActive}>{genre.name}</GenreText>
            </GenreButton>
          );
        })}
      </GenreList>
    );
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <Container>
        <Content>

          <Header>
            <Title>Filter by genre</Title>
            <FilterButton active={activeGenres.length} onPress={onClose} />
          </Header>
          {renderGenres()}

          <Footer>
            <FooterButton onPress={() => setActiveGenres([])}>
              <FooterText>Clear all</FooterText>
            </FooterButton>
            <FooterButton onPress={onClose}>
              <FooterText>OK</FooterText>
            </FooterButton>
          </Footer>

        </Content>
      </Container>
    </Modal>
  );
}

export default FilterModal;
