import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import { Header, Category, MoreButtonText, Padding } from './styles';
import MoviePoster from '../MoviePoster';

const MovieList = ({ category, movies }) => {
  return (
    <View>
      <Header>
        <Category>{category}</Category>
        <TouchableOpacity
          onPress={() => console.log(`Navigate to category "${category}"`)}>
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
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log('Navigate to details of ' + item.id)}>
            <MoviePoster
              title={item.title}
              genres={item.genres}
              posterUri={item.posterUri}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default MovieList;
