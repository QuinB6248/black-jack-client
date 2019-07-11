import React from 'react'

export default function LoginForm(props) {
  const { onChange, onSubmit, values} = props
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>NAME</label>
        </div>
          <input name={'name'} onChange={onChange} value={values.email} placeholder='name'/>
        <div>
          <label>PASSWORD</label>
        </div>
          <input name={'password'} onChange={onChange} value={values.password} placeholder='password'/>
          <button type='submit'>LOGIN</button>
      </form>
    </div>
  )
}