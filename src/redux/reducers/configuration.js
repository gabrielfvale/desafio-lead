const initialState = {
  base_url: '',
  secure_base_url: '',
  backdrop_sizes: [],
  logo_sizes: [],
  poster_sizes: [],
  profile_sizes: [],
  still_sizes: [],
}

export default function setConfigReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
