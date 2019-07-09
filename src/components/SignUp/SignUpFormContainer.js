import React from 'react'
import SignUpForm from './SignUpForm'
import {connect} from 'react-redux'
import {signup} from '../../actions/auth'

class SignUpFormContainer extends React.Component {
state = {
    name: '',
    password: ''
  }

onSubmit = (event) => {
 event.preventDefault()
 console.log('SUBMIT?', this.state.name)
 this.props.signup(this.state.name, this.state.password)
}
onChange = (event) => {
 console.log('CHANGE?', event.target.value)
 this.setState({
   [event.target.name]: event.target.value
 })
}
render() {
 return (
   <div>
     <div>
        <SignUpForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}/>
     </div>
     
    </div>
  )
 }
}

export default connect(null, {signup})(SignUpFormContainer)
