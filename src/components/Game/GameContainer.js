//game id
//players
//initial state
//players 

import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameDetails from './GameDetails'
import { fetchGameDetails } from '../../actions/game'
import request from 'superagent'


class GameContainer extends Component {
state = {
    game: []
}
url = 'https://blooming-sierra-78117.herokuapp.com'

source = new EventSource(`${this.url}/stream`)

componentDidMount() {
    
    this.source.onmessage = this.props.fetchGameDetails
  }
sentEvent = () => {
  const { game } = this.state
  request
  .post(`${this.url}/users`)
  .send({game})
  .then(response => {
      console.log('responsetest: ', response)
    })
  .catch(console.error)
}
  
  
render() {
    
  return (
    <div>
      <GameDetails
        game={this.props.game} 
        
        />
    </div>
    )
  }
}
const mapStateToProps = state => ({
  game: state.game
  
  
})





export default connect(mapStateToProps, {fetchGameDetails})(GameContainer)