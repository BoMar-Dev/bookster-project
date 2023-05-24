import Header from './components/Header'
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Routes, Route, } from 'react-router-dom';
import { GuestPage } from './pages/GuestPage';
import { UserPage } from './pages/UserPage';
import './style/Main.css';

function App() {
  return (
    <>
    < Header/>
    <div className="App">
      <Routes>
        < Route path="/" element={ <LoginPage/> } />
        < Route path="/register" element={ <RegisterPage/> } />
        < Route path="/guest" element={ <GuestPage/> } />
        < Route path="/user" element={ <UserPage/> } />
      </Routes>
      
    </div>
    </>
  );
}

export default App;
