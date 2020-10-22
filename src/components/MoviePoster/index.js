import React, { useState } from 'react';
import { Image } from 'react-native';

import { Poster, Title } from './styles';

const MoviePoster = ({ title, genres, posterUri }) => {
  const fallbackImage = require('../../assets/movie_fallback.png');
  const [imageSource, setImageSource] = useState({uri: `https://image.tmdb.org/t/p/w300${posterUri}`});

  return (
    <Poster>
      <Image
        source={imageSource}
        style={{width: 100, height: 150}}
        onError={() => setImageSource(fallbackImage)}
        />
      {title &&
      <Title
        numberOfLines={2}
        ellipsizeMode='tail'>
        {title}
      </Title>
      }
    </Poster>
  );
}

export default MoviePoster;
