export const GAMES_FETCHED = 'GAMES_FETCHED'

/*
const gamesFetched = games => ({
  type:  GAMES_FETCHED,
  payload: games
})
*/

//EDIT: made one function for action creator
export function fetchGames (event) {
  //console.log('event.data test:', event.data)
  const {data} = event

  const games = JSON.parse(data)

  return {
    type:  GAMES_FETCHED,
    payload: games
  }
  
}