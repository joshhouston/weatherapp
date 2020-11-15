import React from 'react';
import './style.scss';
import SideBar from './components/SideBar'
import Cities from './components/Cities';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Cities />
    </div>
  );
}

export default App;
