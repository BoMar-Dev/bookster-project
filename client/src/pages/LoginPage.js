import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../components/LoginService';
import Header from '../components/Header';
import getJwtInfo from '../utils/getJwtInfo';


// const LOGIN_URL = "http://localhost:4000/auth/login";

 const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername]= useState('');
  const [proceedAsGuest, setProceedAsGuest] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await LoginService(username,password).then(
        () => {
          const token = sessionStorage.getItem("user")
          if(token === null){
            navigate("/guest")
            window.location.reload(false);
          }
          if(getJwtInfo()?.role === "ADMIN"){
            navigate("/admin/books")
            window.location.reload(false); // Utan detta så behöver man refresha 2 ggr för att se logout-knappen
          }else if(getJwtInfo()?.role === "USER"){
            navigate("/user")
            window.location.reload(false);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='login-container'>
        <h1>Login</h1>
        <div className='login-wrapper'>
            <form className='login-form' onSubmit={handleLogin}>
                <label>Username</label>
                <input 
                type="text" 
                placeholder='Type your username...' 
                autoComplete='off'
                value={username}
                required 
                onChange={(e) => setUsername(e.target.value)}
                >
                </input>
                <label>Password</label>
                <input 
                type="password" 
                placeholder='Type your password...' 
                value={password}
                required 
                onChange={(e) => setPassword(e.target.value)}
                >
                </input>
                <button type="submit">Sign in</button>
            </form>
            <p>No account? Sign up <a href="/register" >here!</a></p>
            <button onClick={()=>setProceedAsGuest(!proceedAsGuest)} ><a href="/guest">Proceed as guest user</a></button>
           
           
        </div>
    </div>
  )
}

export default LoginPage