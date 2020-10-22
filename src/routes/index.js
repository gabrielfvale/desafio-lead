import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import themeActions from '../redux/actions/theme';
import genreActions from '../redux/actions/genres';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Home from '../screens/Home';
import Details from '../screens/Details';
import Category from '../screens/Category';
import Search from '../screens/Search';

const Stack = createStackNavigator();

const Navigation = ({ currentTheme, loadApp }) => {

  const barStyle = {'dark': 'light-content', 'light': 'dark-content'};

  useEffect(() => {
    loadApp();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={currentTheme.theme}>
        <StatusBar
          barStyle={barStyle[currentTheme.name]}
          backgroundColor={currentTheme.theme.primaryDark}
        />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const mapState = state => ({ currentTheme: state.theme })
const mapDispatch = dispatch => ({
  loadApp: () => {dispatch(themeActions.getTheme()); dispatch(genreActions.getGenres())},
})

export default connect(mapState, mapDispatch)(Navigation);
