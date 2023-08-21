import logo from './logo.svg';
import './App.css';
import './styles/utilities.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/authorization/Login';
import Register from './components/authorization/register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
