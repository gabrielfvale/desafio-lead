import { darkTheme, lightTheme } from '../../styles/theme';

const initialState = {
  name: 'dark',
  theme: darkTheme
}

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        ...action.payload
      }
    case 'SWITCH_THEME':
      let newState = {...state};
      if(state.name == 'dark') {
        newState.name = 'light';
        newState.theme = lightTheme;
      } else {
        newState.name = 'dark';
        newState.theme = darkTheme;
      }
      return {...newState}
    default:
      return state
  }
}
