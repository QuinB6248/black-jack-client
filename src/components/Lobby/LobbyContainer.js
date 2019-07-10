import React, { Component } from 'react'
import { connect } from 'react-redux'
import LobbyList from './LobbyList'
import { fetchGames } from '../../actions/games'




class LobbyContainer extends Component {
  state = {
    games: [],
    game: ''
    //addMode: false
  }

  url = 'https://blooming-sierra-78117.herokuapp.com'

  source = new EventSource(`${this.url}/lobby`)

  componentDidMount() {//loads all games
    this.source.onmessage = this.props.fetchGames
  }
  // onAdd = () => {
  //   this.setState({
  //     addMode: true,
  //     formValues: {
  //       name: this.props.game.name,
  //       }
  //   })
  //  }
  //  onChange = (event) => {
  //    this.setState({
  //      formValues: {
  //        ...this.state.formValues,
  //        [event.target.name]: event.target.value
  //      }
  //    })
  //    console.log('ChangeState', this.state)
  //  }
 
  //  onSubmit = (event) => {
  //    event.preventDefault()
  //    this.setState({
  //      editMode: false
  //    })
  //    this.props.updateGame(this.props.event.id, this.state.formValues)
  //  }
  render() {
    return (
      <div>
        <LobbyList
        games={this.props.games} 
        // onAdd={this.onAdd} 
        // onChange={this.onChange}
        // onSubmit={this.onSubmit}
        // values={this.state}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  games: state.games
  
})


      


export default connect(mapStateToProps, {fetchGames})(LobbyContainer)