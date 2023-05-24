import React from 'react'


export const LoginPage = () => {

  return (
    <div className='login-container'>
        <h1>Login</h1>
        <div className='login-wrapper'>
            <form className='login-form'>
                <label>Username</label>
                <input type="text" placeholder='Type your username...'></input>
                <label>Password</label>
                <input type="password" placeholder='Type your password...'></input>
            </form>
            <p>No account? Sign up <a href="/register" >here!</a></p>
            <button type="submit">Sign in</button>
            <button><a href="/guest">Proceed as guest user</a></button>
        </div>
    </div>
  )
}
