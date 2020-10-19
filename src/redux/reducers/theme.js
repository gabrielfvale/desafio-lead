import { darkTheme, lightTheme } from '../../styles/theme';

const initialState = {
  name: 'light',
  theme: lightTheme
}

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_GET_THEME':
      return {
        name: action.payload.theme,
        theme: action.payload.theme === 'light' ? lightTheme : darkTheme
      }
    case 'SUCCESS_SWITCH_THEME':
      return {
        name: action.payload.theme,
        theme: action.payload.theme === 'light' ? lightTheme : darkTheme
      }
    default:
      return state
  }
}
