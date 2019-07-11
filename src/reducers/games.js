import { GAMES_FETCHED } from '../actions/games'

const initialState = []

export default function messages (state = initialState, {type, payload}) {
  switch (type) {
    case GAMES_FETCHED:
      return payload
    default:
      return state
  }

}