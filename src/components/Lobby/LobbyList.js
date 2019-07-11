import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//import Form from '../Form/Form'




export default function LobbyList(props) {
if(!props.games) {
     return 'loading...'
     }

// const { games, onAdd, onChange, onSubmit, values } = props
// const {addMode} = values
// const addForm =  <Form onChange={onChange} onSubmit={onSubmit} values={values}/>
// const form = addMode && addForm
// const listOfGames = games.map(game => <li key={game.id}><Link to={`/lobby/${game.id}`}>{game.name}</Link></li>)
  return (
    <div>
      
      {/* <h4>{listOfGames}</h4> 
      {form}
      <button onClick={onAdd}>ADD GAME</button> */}
      
    </div>
  )
}
