import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { View, Text } from '../styles/global';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const DetailsScreen = () => <View><Text>Details screen</Text></View>
const CategoryScreen = () => <View><Text>Category screen</Text></View>
const SearchScreen = () => <View><Text>Search screen</Text></View>

const Navigation = () => {
  
  const themeDetails = useSelector(state => state.theme);

  return (
    <NavigationContainer>
      <ThemeProvider theme={themeDetails.theme}>
        <StatusBar backgroundColor={themeDetails.theme.primaryDark}/>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default Navigation;
