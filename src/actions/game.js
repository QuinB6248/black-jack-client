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