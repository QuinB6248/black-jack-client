import { GAME_DETAILS_FETCHED } from '../actions/game'

const initialState = []

export default function messages (state = initialState, {type, payload}) {
  switch (type) {
    case GAME_DETAILS_FETCHED:
      return payload
    
    default:
      return state
  }

}