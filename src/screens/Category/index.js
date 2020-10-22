import React from 'react';
import { View, Text } from '../../styles/global';
import { connect } from 'react-redux';

const Category = ({ route, navigation, genres }) => {
  const { category } = route.params;
  return (
    <View>
      <Text>Category for "{category}"</Text>
    </View>
  );
}
const mapState = state => ({ genres: state.genres });

export default connect(mapState)(Category);
