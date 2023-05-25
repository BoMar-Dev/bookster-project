import React, { useState } from 'react'
import axios from 'axios';

const LOGIN_URL = "http://localhost:4000/auth/login";



export const LoginPage = () => {
  
  

  return (
    <div className='login-container'>
        <h1>Login</h1>
        <div className='login-wrapper'>
            <form className='login-form'>
                <label>Username</label>
                <input type="text" placeholder='Type your username...' autoComplete='off' required></input>
                <label>Password</label>
                <input type="password" placeholder='Type your password...' required></input>
            </form>
            <p>No account? Sign up <a href="/register" >here!</a></p>
            <button type="submit">Sign in</button>
            <button><a href="/guest">Proceed as guest user</a></button>
        </div>
    </div>
  )
}


// form onSubmit={handleSubmit}
// button innanför form för submit.