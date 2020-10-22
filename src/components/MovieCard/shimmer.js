import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import {
  Card,
  Content,
} from './styles';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const MoviePosterShimmer = () => <ShimmerPlaceHolder style={{width: 100, height: 150}} />

const MovieCardShimmer = () => {
  return (
    <Card>
      <MoviePosterShimmer />
      <Content>
        <ShimmerPlaceHolder style={{width: '100%', height: 20}} />
        <ShimmerPlaceHolder style={{marginTop: 8, width: '100%', height: 70}} />
      </Content>
    </Card>
  );
}

export default MovieCardShimmer;
