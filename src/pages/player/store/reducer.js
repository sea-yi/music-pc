import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  currentSong: {}
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      console.log(action)
      return state.set('currentSong', action.currentSong)
    default:
      return state
  }
}

export default reducer
