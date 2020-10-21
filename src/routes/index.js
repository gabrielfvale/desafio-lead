import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { View, Text } from '../styles/global';

import Home from '../screens/Home';
import Details from '../screens/Details';
import Category from '../screens/Category';

const Stack = createStackNavigator();

const SearchScreen = () => <View><Text>Search screen</Text></View>

const Navigation = () => {

  const themeDetails = useSelector(state => state.theme);
  const barStyle = {'dark': 'light-content', 'light': 'dark-content'}

  return (
    <NavigationContainer>
      <ThemeProvider theme={themeDetails.theme}>
        <StatusBar
          barStyle={barStyle[themeDetails.name]}
          backgroundColor={themeDetails.theme.primaryDark}
        />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default Navigation;
