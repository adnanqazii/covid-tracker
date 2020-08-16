import React, { useState,  } from 'react';
import NavBar from './Components/NavBar'
import InfoPanel from './Components/InfoPanel';
import FootNav from './Components/FootNav';

import './App.css'


function App() {
  const screenConfig = React.useState(0);
  const search = useState('Enter Country...');



  return (
    <div className='app'>
      <NavBar search={search} screenConfig={screenConfig} />
      <div className="panel">
        <InfoPanel currentScreen={screenConfig[0]} search={search} />
      </div>
      <div id="footer">
      <FootNav screenConfig={screenConfig} />
      </div>
    </div>
  );
}

export default App;
