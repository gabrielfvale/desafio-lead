import React from 'react';
import { View, FlatList, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import {
  Title,
  Padding,
  PersonProfile,
  GradientOverlay,
  PersonName
} from './styles';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const PersonShimmer = () => <ShimmerPlaceHolder style={{width: 100, height: 150}} />

const Person = ({ name, profileUri }) => {
  return (
    <PersonProfile>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w185${profileUri}`}}
        style={{width: 100, height: 150}}
        />
      <PersonName
        numberOfLines={2}
        ellipsizeMode='tail'>
        {name}
      </PersonName>
      <GradientOverlay
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.75)']}
        start={{ x: 0, y: 0.65 }} end={{ x: 0, y: 1 }}/>
    </PersonProfile>
  );
}

const Cast = ({ cast, loading }) => {
  const placeholder = [{name: 1}, {name: 2}, {name: 3}, {name: 4}];

  const renderPerson = ({ item }) => {
    if(loading) return <PersonShimmer />;
    return (
      <Person
        key={item.name}
        name={item.name}
        profileUri={item.profileUri}
      />
    );
  }

  return (
    <View>
      <Title>Cast</Title>

      <FlatList
        style={{flexGrow: 0}}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <Padding />}
        ListFooterComponent={() => <Padding />}
        ItemSeparatorComponent={() => <Padding />}
        keyExtractor={item => item.name.toString()}
        data={loading ? placeholder : cast}
        renderItem={renderPerson}
      />
    </View>
  );
}

export default Cast;
