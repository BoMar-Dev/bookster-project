import React from 'react';



const signInButton = () => {
    if(window.location.href === 'http://localhost:3000/guest') {
        return <button className='sign-out-btn'><a href="/">Sign In</a></button>
    } 
}

const signOutBtn = () => {
    
    return <button onClick={()=> {sessionStorage.clear()}} ><a href="/">Sign Out</a></button>
}



export { signInButton, signOutBtn };

