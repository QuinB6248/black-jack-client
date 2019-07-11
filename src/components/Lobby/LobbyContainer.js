import React, { Component } from 'react'
import { connect } from 'react-redux'
import LobbyList from './LobbyList'
import { fetchGames } from '../../actions/games'
import request from 'superagent'


class LobbyContainer extends Component {
state = {
    games: [],
    game: ''
  }
url = 'https://blooming-sierra-78117.herokuapp.com'

source = new EventSource(`${this.url}/stream`)

componentDidMount() {//loads all games
    
    this.source.onmessage = this.props.fetchGames
  }
onChange = (event) => {
    const { value } = event.target
    this.setState({
      game: value
    })
  }
onSubmit = (event) => {
  event.preventDefault()
  const { game } = this.state
  this.setState({game: ''})
    
  request
    .post(`${this.url}/games`)
    .send({game})
    .then(response => {
        console.log('responsetest: ', response)
      })
    .catch(console.error)
  }

  
render() {
    
  return (
    <div>
      <LobbyList
        games={this.props.games} 
        // onAdd={this.onAdd} 
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        values={this.state}
        />
    </div>
    )
  }
}
const mapStateToProps = state => ({
  games: state.games,
  authenticated: !!state.currentUser
  
})





export default connect(mapStateToProps, {fetchGames})(LobbyContainer)