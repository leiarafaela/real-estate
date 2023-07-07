import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login'
import useToken from './components/useToken';
import Profile from './components/Profile';
import Header from './components/Header';


function App() {

  const {token, removeToken, setToken} = useToken();

  return (
    <div>
      <BrowserRouter>
      <Header token={removeToken}/>
      {!token && token !== "" && token !== undefined?
      <Login setToken={setToken} /> :(
      <>
      <Routes>
        <Route path='/profile' element={ <Profile token={token} setToken={setToken} /> } />
      </Routes>
      </>
      )
    }
      </BrowserRouter>
    </div>
  )
}

export default App;
