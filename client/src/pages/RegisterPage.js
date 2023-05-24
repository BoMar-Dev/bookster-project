import React from 'react'

export const RegisterPage = () => {
    return (
      <div className='register-container'>
          <h1>Register</h1>
          <div className='register-wrapper'>
              <form className='register-form'>
                  <label>Username</label>
                  <input type="text" placeholder='Type your username...'></input>
                  <label>Password</label>
                  <input type="password" placeholder='Type your password...'></input>
              </form>
              <p>Already an account? Sign in <a href="/">here!</a></p>
              <button type="submit">Register new account</button>
          </div>
      </div>
    )
  }
