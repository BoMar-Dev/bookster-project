import {useState, useEffect} from "react";
import '../style/Header.css';
import { signInButton, signOutBtn } from "./SignInAndOutButton";
import { SearchField } from "./SearchField";
import getJwtInfo from "../utils/getJwtInfo";

 const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const checkJwt = () => {
    const jwtToken = sessionStorage.getItem("user");
    if(jwtToken !== null){
      console.log(getJwtInfo().username)
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
      
    }
  }

  useEffect(() => {
    checkJwt();
    getJwtInfo();
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
