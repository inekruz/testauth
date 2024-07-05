import React, { useState } from 'react'; 
import './App.css'; 
import Authorization from './Pages/Authorization'; 
import Main from './Pages/Main'; 
 
function App() { 
 
  const [authenticated, setAuthenticated] = useState(false);
 
  return ( 
    <div className="App"> 
      {authenticated ? <Main /> : <Authorization setUserAuthenticated={setAuthenticated} />}  
    </div> 
  ); 
} 
 
export default App;
