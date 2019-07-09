import React from 'react'
import LoginFormContainer from './components/Login/LoginFormContainer'
import SignUpFormContainer from './components/SignUp/SignUpFormContainer'
import BeginScreen from './components/BeginScreen'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

function Routes(props) {
  console.log('CURRENTUSER', props.authenticated)
  return(<div>
   
    {!props.authenticated &&
      <Switch>
        {/* <Route path=""/> */}
        <Route exact path="/" component={BeginScreen}/>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={LoginFormContainer}/>
        {/* <Route path="" render={() => <Redirect to="/start"/>}/>  */}
        {/* <Route path="/login" component={LoginFormContainer}/> */}
        {/* <Route path="" render={() => <Redirect to="/login"/>}/> */}
        {/* <Route path="/signup" component={SignUpFormContainer}/> */}
        {/* <Route path="" render={() => <Redirect to="/signup"/>}/> */}
      </Switch> }
      
      
      
      {/* {props.authenticated &&
      <Switch>
        <Route path="/" exact component={GameContainer} />
        <Route path="/game/:id" component={GameContainer} />
        <Route path="" render={() => <Redirect to="/" />} />
      </Switch>} */}
  </div>)
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))