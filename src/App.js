import React from 'react';
import './style.scss';
import SideBar from './components/SideBar';
import FourDay from './components/FourDay';
import LiveClock from './components/LiveClock'

function App() {
  return (
    <div className="App">
      <div className="left">
        <SideBar />
        <FourDay />
      </div>
      <div className="right">
        <LiveClock />
      </div>
    </div>
  );
}

export default App;
