import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {connect} from 'react-redux'
import {login} from '../actions/auth'

class LoginFormContainer extends React.Component {
state = {
    name: '',
    password: ''
  }

onSubmit = (event) => {
 event.preventDefault()
 console.log('SUBMIT?', this.state.name)
 this.props.login(this.state.name, this.state.password)
}
onChange = (event) => {
 console.log('CHANGE?', event.target.value)
 this.setState({
   [event.target.name]: event.target.value
 })
}
render() {
 return <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}/>
 
 }
}

export default connect(null, {login})(LoginFormContainer)