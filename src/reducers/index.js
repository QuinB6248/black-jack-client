import {combineReducers} from 'redux'
import currentUser from './currentUser'
import signupUser from './signupUser'
import games from './games'
import game from './game'


export default combineReducers({
  signupUser,
  currentUser,
  games,
  game
})