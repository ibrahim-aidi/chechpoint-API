import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home'
import Users from './Pages/Users'
import Profile from './Pages/Profile'
import Error from './Pages/Error';


function App() {
  return (
    <div className="App">
  <NavBar />
  <h1>Workshop API</h1>
<Routes>
<Route path="/" element={ <Home/> } />
<Route path="/users" element={ <Users/> } />
<Route path="/user/:id" element={ <Profile/> } />
<Route path="/*" element={ <Error/> } />
</Routes>
</div>
  );
}

export default App;
