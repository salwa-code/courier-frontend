import React from 'react';


import Profile from './Components/Profile';
import Header from './Components/Header'
import MakeOrder from './Components/MakeOrder'
import Buttons from './Components/Buttons'

import './App.css';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Profile />
      <Header />
      <MakeOrder />
      <Buttons />
      <Form />
    </div>
  );
}

export default App;
