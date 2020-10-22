import { Dimensions, PixelRatio } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
  icon_std: 24,
  btn_std: 56,
};

export const widthPercentageToDP = widthPercentage => {
  const screenWidth = dimensions.fullWidth;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercentage) / 100);
};

export const heightPercentageToDP = heightPercentage => {
  const screenHeight = dimensions.fullHeight;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercentage) / 100);
};

export const padding = {
  sm: 8,
  std: 16,
  bg: 32,
};

export const darkTheme = {
  primary: '#424242',
  primaryLight: '#6d6d6d',
  primaryDark: '#1b1b1b',
  secondary: '#2ecc71',
  secondaryLight: '#6effa0',
  secondaryDark: '#009a44',
  textOnP: '#ffffff',
  textOnS: '#000000',
  accent: '#2ecc71'
};

export const lightTheme = {
  primary: '#ecf0f1',
  primaryLight: '#ffffff',
  primaryDark: '#babebe',
  secondary: '#f39c12',
  secondaryLight: '#ffcd4e',
  secondaryDark: '#bb6e00',
  textOnP: '#000000',
  textOnS: '#000000',
  accent: '#009a44',
};
