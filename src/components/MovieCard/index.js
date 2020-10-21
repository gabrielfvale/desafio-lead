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

const MovieCard = ({ posterUri, title, overview, loading, onDetailsPress }) => {
  return (
    <Card>
      <Poster
        source={{uri: `https://image.tmdb.org/t/p/w300${posterUri}`}}
        style={{width: 100, height: 150}}
      />
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
