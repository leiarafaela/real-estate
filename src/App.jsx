import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login/Login';
import useToken from './services/useToken';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {

  const {token, setToken} = useToken();

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login setToken={setToken}/> } />
        <Route path='/home' element={ <Home token={token} setToken={setToken} /> } />
        <Route path='/profile' element={ <Profile token={token}/> } />
      </Routes>    
      </BrowserRouter>
    </div>
  )
}

export default App;
