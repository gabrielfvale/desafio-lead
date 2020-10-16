import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from 'styled-components';
import { PrimaryView, PrimaryText } from '../styles/global';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const HomeScreen = () => <PrimaryView><PrimaryText>Home screen</PrimaryText></PrimaryView>
const DetailsScreen = () => <PrimaryView><PrimaryText>Details screen</PrimaryText></PrimaryView>
const SearchScreen = () => <PrimaryView><PrimaryText>Search screen</PrimaryText></PrimaryView>

const Navigation = () => {
  
  const themeDetails = useSelector(state => state.theme);

  return (
    <NavigationContainer>
      <ThemeProvider theme={themeDetails.theme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default Navigation;
