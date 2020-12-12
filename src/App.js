import React from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;
