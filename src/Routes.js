import React from 'react'
import LoginFormContainer from './Login/LoginFormContainer'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

function Routes(props) {
  return(<div>
    {!props.authenticated &&
      <Switch>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="" render={() => <Redirect to="/login"/>}/>
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