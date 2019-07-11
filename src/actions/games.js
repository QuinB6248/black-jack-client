export const GAMES_FETCHED = 'GAMES_FETCHED'

const gamesFetched = games => ({
  type:  GAMES_FETCHED,
  payload: games
})

export const fetchGames = (event) => (dispatch) => {
  //console.log('event.data test:', event.data)

  const games = JSON.parse(event.data)

  //console.log('games test:', games)
  dispatch(gamesFetched(games))

  
}