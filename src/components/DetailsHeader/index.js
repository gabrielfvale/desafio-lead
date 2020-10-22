import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Backdrop,
  GradientOverlay,
  SecondaryContainer,
  InfoContainer,
  Title,
  Info,
  Tagline,
} from './styles';

import { ShimmerPlaceHolder, PosterShimmer, TitleShimmer } from './shimmer';

import MoviePoster from '../MoviePoster';

const DetailsHeader = ({title, tagline, genres, runtime, posterUri, backdropUri, loading = false, currentTheme }) => {
  const { primary } = currentTheme;

  const renderContainer = () => {
    if (loading) {
      return (
      <>
        <PosterShimmer />
        <InfoContainer>
          <TitleShimmer />
          <ShimmerPlaceHolder />
        </InfoContainer>
      </>
      );
    } else {
      return (
        <>
          <MoviePoster posterUri={posterUri} />
          <InfoContainer>
            <Title>{title}</Title>
            <Info>{genres.join(', ')} {" • "} {runtime} min</Info>
            <Tagline>{tagline}</Tagline>
          </InfoContainer>
        </>
      );
    }
  }

  return (
    <Container>
      <Backdrop
        source={{uri: `https://image.tmdb.org/t/p/w780/${backdropUri}`}}>
        <GradientOverlay
          locations={[0, 0.2, 0.7, 0.9]}
          colors={[
            `${primary}40`,
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0)',
            `${primary}FF`,
          ]}
        />
      </Backdrop>
      <SecondaryContainer>
        {renderContainer()}
      </SecondaryContainer>
    </Container>
  );
}

const mapState = state => ({currentTheme: state.theme.theme});

export default connect(mapState)(DetailsHeader);
