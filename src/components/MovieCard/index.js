import React from 'react';

import {
  Card,
  Poster,
  Content,
  Title,
  Briefing,
  SeeMoreButton,
  SeeMoreText,
} from './styles';

import MoviePoster from '../MoviePoster';

const MovieCard = ({ posterUri, title, overview, loading, onDetailsPress }) => {
  return (
    <Card>
      <MoviePoster posterUri={posterUri}/>
      <Content>
        <Title numberOfLines={1}>{title}</Title>
        <Briefing numberOfLines={3}>{overview}</Briefing>
        <SeeMoreButton onPress={onDetailsPress}>
          <SeeMoreText>DETAILS</SeeMoreText>
        </SeeMoreButton>
      </Content>
    </Card>
  );
}

export default MovieCard;
