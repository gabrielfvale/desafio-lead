import React from 'react';
import { View, Text } from '../../styles/global';

const Category = ({ route, navigation }) => {
  const { category } = route.params;
  return (
    <View>
      <Text>Category for "{category}"</Text>
    </View>
  );
}

export default Category;
