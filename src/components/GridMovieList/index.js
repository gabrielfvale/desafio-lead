import React from 'react';
import { View, FlatList } from 'react-native';
import { PosterButton } from './styles';

import MoviePoster from '../MoviePoster';
import MoviePosterShimmer from '../MoviePoster/shimmer';

const GridMovieList = ({ movies, loading, onPress, onEndReached, footerComponent}) => {
  const placeholder = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6},];

  const renderMovies = ({ item }) => {
    if (loading) {
      return <PosterButton><MoviePosterShimmer /></PosterButton>;
    } else {
      return (
        <PosterButton onPress={() => onPress(item)}>
          <MoviePoster posterUri={item.poster_path} />
        </PosterButton>
      );
    }
  }

  return (
    <View>
      <FlatList
        contentContainerStyle={{alignItems: 'center', justifyContent: 'space-around'}}
        data={loading ? placeholder : movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMovies}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
}

export default GridMovieList;
