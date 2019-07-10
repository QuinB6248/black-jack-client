import {combineReducers} from 'redux'
import currentUser from './currentUser'
import games from './games'


export default combineReducers({
  currentUser,
  games
})