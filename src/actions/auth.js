import request from 'superagent'
const baseUrl = 'http://localhost:5005'

export const LOGIN_SUCCES = 'LOGIN_SUCCES'

const loginSucces = jwt => ({
  type: LOGIN_SUCCES,
  payload: jwt
})

export const login = (name, password) => (dispatch) => {
  
  request
    .post(`${baseUrl}/login`)
    .send({name: name, password: password})
    .then((response)=> {
      console.log(response.body)
      dispatch(loginSucces(response.body.jwt))
      
    })
    .catch(console.error)
}

export const SIGNUP_SUCCES = 'SIGNUP_SUCCES'

const signupSucces = event => ({
  type: SIGNUP_SUCCES,
  payload: event
})

export const signup = (name, password) => (dispatch) => {
  request
    .post(`${baseUrl}/signup`)
    .send({name: name, password: password})
    .then(response => {

    })
    .catch(console.error)
}
