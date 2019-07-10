import React from 'react'
import LoginFormContainer from './components/Login/LoginFormContainer'
import SignUpFormContainer from './components/SignUp/SignUpFormContainer'
import BeginScreen from './components/BeginScreen'
import GameContainer from './components/Game/GameContainer'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import LobbyContainer from './components/Lobby/LobbyContainer'

function Routes(props) {
  console.log('CURRENTUSER', props.authenticated)
  return(<div>
   
    {!props.authenticated &&
      <Switch>
        <Route exact path="/" component={BeginScreen}/>
        <Route path="/signup" component={SignUpFormContainer}/>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="" render={() => <Redirect to="/" />} />   
      </Switch> }
      
      
      
      {props.authenticated &&
      <Switch>
        <Route path="/lobby" exact component={LobbyContainer} />
        {/* <Route path="/lobby/:id" component={GameContainer} />  */}
        <Route path="" render={() => <Redirect to="/lobby" />} />
      </Switch>} 
  </div>)
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))