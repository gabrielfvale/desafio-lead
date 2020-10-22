import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const MoviePosterShimmer = () => <ShimmerPlaceHolder style={{width: 100, height: 150}} />

export default MoviePosterShimmer;
