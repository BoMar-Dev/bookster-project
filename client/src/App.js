import Header from './components/Header'
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Routes, Route, } from 'react-router-dom';
import './style/App.css';

function App() {
  return (
    <>
    < Header/>
    <div className="App">
      <Routes>
        < Route path="/" element={ <LoginPage/> } />
        < Route path="/register" element={ <RegisterPage/> } />
      </Routes>
      
    </div>
    </>
  );
}

export default App;
