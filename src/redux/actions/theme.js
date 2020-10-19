const getTheme = () => {
  return {
    type: 'REQUEST_GET_THEME',
  }
}

const setTheme = payload => {
  return {
    type: 'REQUEST_SET_THEME',
    payload
  }
}

const switchTheme = () => {
  return {
    type: 'REQUEST_SWITCH_THEME',
  }
}

export default { getTheme, setTheme, switchTheme };
