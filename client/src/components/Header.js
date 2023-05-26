import {useState, useEffect} from "react"
import { SearchField } from './SearchField';

 const Header = () => {
  const [currentUser, setCurrentUser] = useState(undefined);


  const getCurrentUser = () => {
    return JSON.parse(sessionStorage.getItem('username'));
  }

  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
console.log(currentUser);
  return (
    <header className="header-container">
      
        <h1>Bookster Website</h1>
        {currentUser ? (
          <div>
            <p>Browsing as user <span>-{currentUser.username}- </span></p>
            <button><a href="/">Sign Out</a></button>
          </div>
        ) : (
          <div>
            <p>Browsing as guest</p>
            <button><a href="/">Sign Out</a></button>
          </div>
        )}
        
        
        <SearchField/>
    </header>
  )
}
export default Header
