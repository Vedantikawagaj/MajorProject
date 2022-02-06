import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path='/login' element={ <LoginPage/>}/>
        <Route path='/register' element={ <RegisterPage/>}/>
      </Routes>
    </div>
      
    </BrowserRouter>

  );
}

export default App;
