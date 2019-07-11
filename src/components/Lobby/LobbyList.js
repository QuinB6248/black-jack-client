import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//import Form from '../Form/Form'




export default function LobbyList(props) {
if(!props.games) {
     return 'loading...'
     }

     
const { games, onChange, onSubmit, values } = props
console.log('GAMES', values)

const listOfGames = games.map(game => <li key={game.id}><Link to={`/streamdata/${game.id}`}>{game.name}</Link></li>)
  return (
    <div>
      
      <h4>{listOfGames}</h4> 
      <form onSubmit={onSubmit}>
        <input
          value={values.game}
          onChange={onChange}
          type='text'
        />
        <button>send</button>
      </form> 

      {/* {form}
      <button onClick={onAdd}>ADD GAME</button> */} 
      
    </div>
  )
}
