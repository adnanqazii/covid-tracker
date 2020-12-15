import React,{useState} from 'react';
import NavBar from './Components/NavBar'
import InfoPanel from './Components/InfoPanel';
import FootNav from './Components/FootNav';

import './App.css'

function App() {
  const screenConfig= React.useState(0);
  const search=useState('Enter Country...');
  return (
    <div className='app'>
      <NavBar search={search} screenConfig={screenConfig} />
      <InfoPanel currentScreen={screenConfig[0]} search={search} />
      <FootNav screenConfig={screenConfig} />
      
    </div>
  );
}

export default App;
