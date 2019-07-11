import React, { Component } from 'react'
import { connect } from 'react-redux'
import LobbyList from './LobbyList'
import { fetchGames } from '../../actions/games'
import request from 'superagent'


class LobbyContainer extends Component {
state = {
    games: [],
    name: ''
  }
url = 'https://blooming-sierra-78117.herokuapp.com'

source = new EventSource(`${this.url}/stream`)

componentDidMount() {//loads all games
    
    this.source.onmessage = this.props.fetchGames
  }
onChange = (event) => {
  console.log('EVENT', event)
    const { value } = event.target
    this.setState({
      game: value
    })
  }
onSubmit = (event) => {
  event.preventDefault()
  const { game } = this.state
  console.log('responsetest: ', game)
  this.setState({game: ''})
  const jwt = this.props.currentUser
  request
    .post(`${this.url}/games`)
    .send({name: game})
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
        console.log('responsetest: ', response)
      })
    .catch(console.error)
  }

  
render() {
    console.log('CURGAMES', this.props.currentUser)
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
  authenticated: !!state.currentUser,
  currentUser: state.currentUser
  
})





export default connect(mapStateToProps, {fetchGames})(LobbyContainer)