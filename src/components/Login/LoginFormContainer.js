import React from 'react'
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {login} from '../../actions/auth'
import {Switch, Route, Redirect} from 'react-router-dom'

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
  console.log('AUTH', this.props.authenticated)
 return (
   <div>
     <div>
       
        {/* <Route path="/login" component={LoginFormContainer}/> */}
        <LoginForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}/>
     </div>
     
    </div>
  )
 }
}


const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default connect(mapStateToProps, {login})(LoginFormContainer)