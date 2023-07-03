/*
  From this page we pass the content to Header.js,
depending on whether the user is logged in as a user or has continued as a guest  "
*/

import React from "react";
const signInButton = () => {
  if (window.location.href === "http://localhost:3000/guest") {
    return (
      <button className="sign-out-btn">
        <a href="/" className="guestPage-signIn">
          Sign In
        </a>
      </button>
    );
  }
};

const signOutBtn = () => {
  return (
    <button
      data-testid="signoutbtn"
      onClick={() => {
        sessionStorage.clear();
      }}
      className="guestPage-signOut">
      <a href="/">Sign Out</a>
    </button>
  );
};

export { signInButton, signOutBtn };
