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

const actions = {
  setTheme,
  switchTheme
}

export default actions;
