import { SearchField } from './SearchField';

export const Header = () => {

  return (
    <header className="header-container">
        <h1>Bookster Website</h1>
        <p>Browsing as user <span>-username- </span></p>
        <button><a href="/">Sign Out</a></button>
        <SearchField/>
    </header>
  )
}
