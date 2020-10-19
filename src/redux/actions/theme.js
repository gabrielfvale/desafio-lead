const setTheme = payload => {
  return {
    type: 'SET_THEME',
    payload
  }
}

const switchTheme = () => {
  return {
    type: 'SWITCH_THEME',
  }
}

export default { setTheme, switchTheme };
