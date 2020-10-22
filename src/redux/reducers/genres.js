const initialState = {
  genreList: []
}

export default function genresReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_GET_GENRES':
      return {
        genreList: [...action.payload]
      }
    default:
      return state
  }
}
