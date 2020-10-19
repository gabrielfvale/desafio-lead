import React from 'react';
import { Image } from 'react-native';

import { Poster, Title, Genres } from './styles';
import { Text } from '../../styles/global';

const MoviePoster = ({ title, genres, posterUri }) => {
  return (
    <Poster>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w300${posterUri}`}}
        style={{width: 100, height: 150}}
        />
      <Title
        numberOfLines={2}
        ellipsizeMode='tail'>
        {title}
      </Title>
      <Genres>
        <Text
          numberOfLines={1}>
          {genres.join(', ')}
        </Text>
      </Genres>
    </Poster>
  );
}

export default MoviePoster;
