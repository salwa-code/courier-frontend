import React from 'react'
import './index.css'
import Login from './Components/Login'
import Orders from './Components/Orders'
import './App.css'
import CreateOrderPage from './Components/CreateOrderPage'


function App() {
  return (
    <div className="App">
      <Login/>
      <Orders/>
      <CreateOrderPage/>
    </div>
  );
}

export default App;