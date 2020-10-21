import React from 'react';
import { View, FlatList } from 'react-native';

import MovieCard from '../MovieCard';
import MovieCardShimmer from '../MovieCard/shimmer';

import { Padding } from './styles';

const DetailedMovieList = ({ movies, loading, onDetailsPress, onEndReached, footerComponent}) => {
  const placeholder = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];

  const renderMovies = ({ item }) => {
    if (loading) {
      return <MovieCardShimmer />;
    } else {
      return (
        <MovieCard
          title={item.title}
          posterUri={item.poster_path}
          overview={item.overview}
          onDetailsPress={() => onDetailsPress(item)}
        />
      );
    }
  }

  return (
    <View>
      <FlatList
        data={loading ? placeholder : movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMovies}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Padding />}
        onEndReached={onEndReached}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
}

export default DetailedMovieList;
