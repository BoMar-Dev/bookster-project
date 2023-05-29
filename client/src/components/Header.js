import {useState, useEffect} from "react";
import '../style/Header.css';
import { signInButton, signOutBtn } from "./SignInAndOutButton";
import { SearchField } from "./SearchField";

 const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function checkJwt(){
    const jwtToken = sessionStorage.getItem("user");
    if(jwtToken !== null){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
    
  }

  useEffect(() => {
    checkJwt();

  }, [loggedIn])
  
  
  return (
    <header className="header-container">
      
        <h1 className="header-title">Bookster Website</h1>

         {loggedIn ? signOutBtn(): signInButton()}
         {/* {!loggedIn && signInButton()} */}
        {/* <div className="Allt-inom-denna-div-ska-döljas-på-startsidan">
          <p>Browsing as GUEST <span>--username--</span></p>
          {signInButton()}
        </div> */}
      
    </header>
  )
}
export default Header
