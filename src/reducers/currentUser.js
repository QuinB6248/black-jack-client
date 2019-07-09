import { LOGIN_SUCCES, SIGNUP_SUCCES} from '../actions/auth'
  

const reducer = (state = null, action) => {
  switch(action.type) {
    case LOGIN_SUCCES:
      return action.payload
    case SIGNUP_SUCCES:
      return action.payload
    default: 
      return state
  }
}

export default reducer