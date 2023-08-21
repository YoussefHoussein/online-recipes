import logo from './logo.svg';
import './App.css';
import './styles/utilities.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/authorization/Login';
import Register from './components/authorization/register';
import Dashboard from './components/home';
import Home from './components/home/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
