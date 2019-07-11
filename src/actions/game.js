import request from 'superagent'
const baseUrl = 'https://blooming-sierra-78117.herokuapp.com'

 export const GAME_DETAILS_FETCHED = 'GAME_DETAILS_FETCHED'

 const gameDetailsFetched = games => ({
   type:  GAME_DETAILS_FETCHED,
   payload: games
 })

 export const fetchGameDetails = (event) => (dispatch) => {
   console.log('event.data test:', event.data)

   const game = JSON.parse(event.data)

   //console.log('games test:', games)
   dispatch(gameDetailsFetched(game))

  
 }


export const GAME_CREATED = 'GAME_CREATED'

const gameCreated = event => ({
  type: GAME_CREATED,
  payload: event
})

export const createGame = (data) => (dispatch, getState) => {
  const jwt = getState().currentUser
  request
    .post(`${baseUrl}/games`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => dispatch(gameCreated(response.body)))
    .catch(console.error)
}