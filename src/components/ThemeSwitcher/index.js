import React from 'react';
import { Button } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { connect } from 'react-redux';
import themeActions from '../../redux/actions/theme';

const ThemeSwitcher = ({ currentTheme, switchTheme }) => {
  const { name, theme } = currentTheme;
  const themeToIcon = {'light': 'moon', 'dark': 'sun'}
  return (
    <Button onPress={switchTheme}>
      <Icon
        name={themeToIcon[name]}
        size={24}
        color={theme.textOnP}
      />
    </Button>
  );
};

const mapState = state => ({ currentTheme: state.theme });

const mapDispatch = dispatch => ({
  switchTheme: () => dispatch(themeActions.switchTheme()),
})


export default connect(
  mapState,
  mapDispatch
)(ThemeSwitcher);
