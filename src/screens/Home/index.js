import React from 'react';

import { TouchableOpacity } from 'react-native';
import { View, Text } from '../../styles/global';

import { useDispatch } from 'react-redux';
import themeActions from '../../redux/actions/theme';

import MovieList from '../../components/MovieList';

const movies = [
  {
    id: '315635',
    title: 'Spider-man: Homecoming',
    genres: ['Action', 'Adventure'],
    posterUri: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg'
  },
  {
    id: '337401',
    title: 'Mulan',
    genres: ['Action', 'Adventure'],
    posterUri: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
  },
  {
    id: '475557',
    title: 'Joker',
    genres: ['Crime', 'Thriller'],
    posterUri: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
  },
  {
    id: '454626',
    title: 'Sonic the Hedgehog',
    genres: ['Action', 'Adventure'],
    posterUri: '/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg'
  },
  {
    id: '497582',
    title: 'Enola Holmes',
    genres: ['Crime', 'Drama'],
    posterUri: '/riYInlsq2kf1AWoGm80JQW5dLKp.jpg'
  },
];


const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(themeActions.switchTheme())}>
        <Text>Switch theme</Text>
      </TouchableOpacity>
      <MovieList
        navigation={navigation}
        category="Popular"
        movies={movies}
      />
      <MovieList
        navigation={navigation}
        category="Top rated"
        movies={movies}
      />
    </View>
  );
}

export default Home;
