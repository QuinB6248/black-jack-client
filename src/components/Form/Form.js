import React from 'react'

export default function Form() {
  return (
    <div>
      <form>
        <div>
          <label>NEW GAME</label>
        </div>
        <div>
          <input type='text' name={'name'} value={values.name} onChange={onChange} placeholder='name'/>
        </div>
      </form>
    </div>
  )
}
