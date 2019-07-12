import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameDetails from './GameDetails'
import { fetchGameDetails } from '../../actions/game'
import request from 'superagent'



class GameContainer extends Component {
state = {
    game: "",
    stand: false,
    hit: false
}
url = 'https://blooming-sierra-78117.herokuapp.com'


source = new EventSource(`${this.url}/streamdata/${this.props.match.params.id}`)

componentDidMount() {
  
    this.source.onmessage = this.props.fetchGameDetails
    console.log('ONMESSAGE', this.source.onmessage)
  }
startGame = () => {
  const jwt = this.props.currentUser
  request(`${this.url}/games/${this.props.match.params.id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
        console.log('responsetestand: ', response)
      })
    .catch(console.error)
}

setStand = () => {
  this.setState({
    stand: true
  })
  const { stand } = this.state
  this.setState({stand: false})
  const jwt = this.props.currentUser
  request
    .put(`${this.url}/games/${this.props.match.params.id}`)
    .send({stand})
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
        console.log('responsetestand: ', response)
      })
    .catch(console.error)
}
setHit = () => {
  this.setState({
    hit: true
  })
  //const { stand } = this.state
  this.setState({hit: false})
  const jwt = this.props.currentUser
  request
    .post(`${this.url}/games/${this.props.match.params.id}`)
    .send()
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
        console.log('responsehit: ', response)
      })
    .catch(console.error)
}


render() {
  console.log('GAMEeeeeee', this.props.game)
  return (

    <div>
      
      <GameDetails
        game={this.props.game} 
        setStand = {this.setStand}
        setHit={this.setHit}
        startGame={this.startGame}
        
        />
    </div>
    )
  }
}
const mapStateToProps = state => ({
  game: state.game,
  games: state.games,
  currentUser: state.currentUser
  
})





export default connect(mapStateToProps, {fetchGameDetails})(GameContainer)