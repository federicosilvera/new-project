import React from 'react'
import "./Form.css"

export const Sign = () => {
  return (
    <div className='form-container'>
        <form className='form'>
            <h1>SIGN IN</h1>
            <p>Email</p>
            <input type="email" placeholder='EMAIL'></input>
            <p>Password</p>
            <input type='password' placeholder='PASSWORD'></input>
            <button type='submit' className='buton'>Submit</button>
        </form>
    </div>
  )
}
