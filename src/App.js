import React from 'react';
import './App.css';
import CommandBar from './Components/CommandBar';
import Navbar from './Components/Navbar';
import Pypgrid from './Components/Pypgrid';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CommandBar />
      <Pypgrid />
    </React.Fragment>
  );
}
export default App;
