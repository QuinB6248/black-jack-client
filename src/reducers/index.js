import {combineReducers} from 'redux'
import currentUser from './currentUser'
import games from './games'
import game from './game'


export default combineReducers({
  currentUser,
  games,
  game
})