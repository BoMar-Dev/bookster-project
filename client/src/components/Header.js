/*
It is from this page that we send the header text "Bookster Website" to all our pages. 
This is also where we handle the functionality when a button should say "LOG IN" and when a button should say "LOG OUT". 
It works with SignInAnd Sign Out Button.js"
*/

import { useState, useEffect } from "react";
import "../style/Header.css";
import { signInButton, signOutBtn } from "./SignInAndOutButton";
import getJwtInfo from "../utils/getJwtInfo";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const checkJwt = () => {
    const jwtToken = sessionStorage.getItem("user");
    if (jwtToken !== null) {
      console.log(getJwtInfo().username);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    checkJwt();
    getJwtInfo();
  }, [loggedIn]);

  return (
    <header className="header-container">
      <h1 className="header-title">Bookster Website</h1>

      {loggedIn ? signOutBtn() : signInButton()}
    </header>
  );
};
export default Header;
