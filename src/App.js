import React from 'react';
import './style.scss';
import SideBar from './components/SideBar'
import Cities from './components/Cities';
import FourDay from './components/FourDay';

function App() {
  return (
    <div className="App">
      <SideBar />
      <FourDay />
    </div>
  );
}

export default App;
