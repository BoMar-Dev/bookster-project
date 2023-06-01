import React from 'react';



const signInButton = () => {
    if(window.location.href === 'http://localhost:3000/guest') {
        return <button className='sign-out-btn'><a href="/" className='guestPage-signIn'>Sign In</a></button>
    } 
}

const signOutBtn = () => {
    
    return <button onClick={()=> {sessionStorage.clear()}} className='guestPage-signOut'><a href="/">Sign Out</a></button>
}



export { signInButton, signOutBtn };

