
import React from 'react';

import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

export const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const PosterShimmer = () => <ShimmerPlaceHolder style={{width: 100, height: 150}} />;

export const TitleShimmer = () => <ShimmerPlaceHolder style={{height: 32, marginBottom: 8}}/>;
