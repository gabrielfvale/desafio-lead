import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Header, Category, MoreButtonText, Padding } from './styles';
import MoviePoster from '../MoviePoster';
import MoviePosterShimmer from '../MoviePoster/shimmer';

const MovieList = ({ category, movies, loading, onMoviePress, onSeeAllPress }) => {
  const placeholder = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  const navigation = useNavigation();

  const renderMovie = ({ item }) => {
    if(loading) return <MoviePosterShimmer />;
    return (
      <TouchableOpacity
        onPress={() => onMoviePress(item)}>
        <MoviePoster
          title={item.title}
          genres={item.genres}
          posterUri={item.posterUri}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <Header>
        <Category>{category}</Category>
        <TouchableOpacity
          onPress={() => onSeeAllPress(category)}>
          <MoreButtonText>
            See all
          </MoreButtonText>
        </TouchableOpacity>
      </Header>

      <FlatList
        style={{flexGrow: 0}}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <Padding />}
        ListFooterComponent={() => <Padding />}
        ItemSeparatorComponent={() => <Padding />}
        keyExtractor={item => item.id.toString()}
        data={loading ? placeholder : movies}
        renderItem={renderMovie}
      />
    </View>
  );
}

export default MovieList;
