import React from 'react';
import './App.css';
import 'fontsource-roboto';
import MainChat from './components/MainChat.js'
import Store from './components/Store.js'
import Login from './components/Login'

import AppNav from './components/AppNav'



function App() {
  return (
    <div className="App">
      <Login />
      <AppNav />
      <Store>
        <MainChat />
      </Store>

    </div>
  );
}

export default App;
