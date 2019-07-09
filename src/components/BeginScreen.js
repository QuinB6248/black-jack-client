import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import LoginFormContainer from './Login/LoginFormContainer'
//import SignUpContainer from './SignUp/SignUpFormContainer'

export default class BeginScreen extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={`/login`}>LOGIN</Link>
        </div>
        <div>
          <Link to={`/signup`}>SIGNUP</Link>
        </div>
       
       
      </div>
    )
  }
}
